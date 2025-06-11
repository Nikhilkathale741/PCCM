import json
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.forms import widgets
from django.http import HttpResponseRedirect
from django.shortcuts import redirect, render
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django import forms
from django.views.decorators.cache import never_cache
from django.utils.decorators import method_decorator
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.core.serializers import serialize
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404

from .forms import PatientBasicInfoForm

from .models import *

# Create your views here.
def login_view(request):
    if request.user.is_authenticated:
        return redirect('index')
        
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            response = render(request, "pccm_website/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        response = render(request, "pccm_website/login.html")

    # Set no-cache headers
    response['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response['Pragma'] = 'no-cache'
    response['Expires'] = '0'

    return response   
def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "auctions/register.html", {
                "message": "Passwords must match."
            })
        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "pccm_website.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "pccm_website/register.html")

def logout_view(request):
    logout(request)
    response = redirect('login')
    response['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response['Pragma'] = 'no-cache'
    response['Expires'] = '0'
    return response

@never_cache
@login_required(login_url="login")

# def index(request):
#     object_list = PatientBasicInfo.objects.all().order_by('patient_id') 
#     patient_list = PatientBasicInfo.objects.all().order_by('patient_id').values_list('patient_id')
#     appointment_list= Visit.objects.filter(patient_id__in = patient_list)
#     patient_count= PatientBasicInfo.objects.all().count # Customize ordering
#     paginator = Paginator(object_list,15)  # Show 15 items per page
#     appoint_paginator=Paginator( appointment_list,15)
#     page_number = request.GET.get('page')
#     page_obj = paginator.get_page(page_number)
#     patient_obj = appoint_paginator.get_page(page_number)

#     return render(request, 'pccm_website/index.html', {
#         'page_obj': page_obj,
#         'patient_count':patient_count,
#         'patient_obj':patient_obj
#     })

# def index(request):
#     object_list = PatientBasicInfo.objects.all().order_by('patient_id') 
#     patient_list = object_list.values_list('patient_id', flat=True)

#     appointment_list = Visit.objects.filter(patient_id__in=patient_list).order_by('patient_id')

#     # Count
#     patient_count = object_list.count()

#     # Pagination
#     paginator = Paginator(object_list, 15)  # Patient info
#     appoint_paginator = Paginator(appointment_list, 15)  # Visit info

#     page_number = request.GET.get('page')
#     page_obj = paginator.get_page(page_number)
#     patient_obj = appoint_paginator.get_page(page_number)

#     # Zip both
#     combined = zip(page_obj, patient_obj)

#     return render(request, 'pccm_website/index.html', {
#         'combined': combined,
#         'patient_count': patient_count,
#     })

def index(request):
    object_list = PatientBasicInfo.objects.all().order_by('patient_id') 

    patient_count = object_list.count()

    paginator = Paginator(object_list, 15)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    current_patient_ids = page_obj.object_list.values_list('patient_id', flat=True)

    latest_visits = []
    for pid in current_patient_ids:
        latest = Visit.objects.filter(patient_id=pid).order_by('-visit_date').first()
        latest_visits.append(latest)

    combined = zip(page_obj, latest_visits)

    return render(request, 'pccm_website/index.html', {
        'combined': combined,
        'patient_count': patient_count,
        'page_obj': page_obj 
    })

def pccm_details_view(request):
    if request.method=="GET":
        return render(request,"pccm_website/pccm_details.html",{
            "form":PatientBasicInfoForm()
        })
    if request.method == 'POST':
        
        form = PatientBasicInfoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('pccm_details')  # or change this to a "success" page if needed
        else:
            # form has errors
            return render(request, 'pccm_website/pccm_details.html', {'form': form})
    else:
        form = PatientBasicInfoForm()
        return render(request, 'pccm_website/pccm_details.html', {'form': form})


def visit_details(request,patient_id):
    if request.method=="GET":
        visit_info=Visit.objects.filter(patient_id=patient_id)
        return JsonResponse([ visit.serialize() for visit in  visit_info], safe=False)


def search_patients(request):
    if request.method == "POST":
        searched = request.POST['searched']
        patient_info = PatientBasicInfo.objects.filter(patient_id=searched)
        return render(request, 'pccm_website/search_result.html', {
            'searched': searched,
            'PatientBasicInfo': patient_info
        })
    else:
        return render(request, 'pccm_website/search_result.html', {
            'searched': '',
            'PatientBasicInfo': []
        })
@csrf_exempt
def add_visit(request, patient_id):
    try:
        if request.method == 'POST':
            data = json.loads(request.body)
            Visit.objects.create(
                patient_id= get_object_or_404(PatientBasicInfo, patient_id=patient_id),
                visit_date=data['visitDate'],
                investigation_intervention_advised1=data['investigation'],
                visit_type=data['visitType'],
                notes=data['notes'],
                next_visit_date=data['nextVisitDate']
            )
            return JsonResponse({'message': 'Visit added successfully'}, status=201)
        else:
            return JsonResponse({'error': 'Invalid method'}, status=405)
    except Exception as e:
        # Log the error message for debugging
        print(f"Error: {str(e)}")
        return JsonResponse({'error': 'Internal Server Error'}, status=500)


def total_visits(request):
    visits = Visit.objects.select_related('patient_id').all()
    return render(request, 'pccm_website/total_visits.html', {'visits': visits})


def p_id_search(request,patient_id):
        patient_info = PatientBasicInfo.objects.filter(patient_id=patient_id)
        return render(request, 'pccm_website/search_result.html', {
            'searched': patient_id,
            'PatientBasicInfo': patient_info
        })

def file_search(request,file_id):
        patient_info = PatientBasicInfo.objects.filter(file_number=file_id)
        return render(request, 'pccm_website/search_result.html', {
            'searched': file_id,
            'PatientBasicInfo': patient_info
        })

def patient_info(request, patient_id):
    patient = get_object_or_404(PatientBasicInfo, patient_id=patient_id)

    if request.method == 'GET':
        data = {
            "patient_id": patient.patient_id,
            "jehangir_id": patient.jehangir_id,
            "file_number": patient.file_number,
            "referred_by": patient.referral_source,
            "date": patient.date_of_registration,
            "name": patient.full_name,
            "age": patient.age_years,
            "gender": patient.gender,
            "dob": patient.date_of_birth,
            "identity_card": patient.id_proof,
            "id_number": patient.id_number,
            "address": patient.permanent_address,
            "phone": patient.mobile_number,
            "alternate_number": patient.emergency_mobile_number,
            "occupation": patient.occupation,
            "email": patient.email
        }
        return JsonResponse(data)

    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            patientinformationhistory.objects.create(
                patient_id=patient,
                height=data.get('height'),
                weight=data.get('weight'),
                bmi=data.get('bmi'),
                annual_household_income=data.get('income'),
                supplement_taken=data.get('supplement') in ['true', 'True', True],
                supplement_type=data.get('supplementType'),
                supplement_quantity=data.get('quantity'),
                supplement_duration=data.get('usage'),
                physical_activity_y_n=data.get('physical_activity_y_n'),
                type_physical_activity=data.get('type_physical_activity'),
                frequency_physical_activity=data.get('frequency_physical_activity'),
                diet=','.join(data.get('diet', [])),
                alcohol_y_n=data.get('alcohol_y_n'),
                alcohol_consumption_age_yrs=data.get('alcohol_consumption_age_yrs'),
                quantity_alcohol_per_week=data.get('quantity_alcohol_per_week'),
                duration_alcohol_consumption=data.get('duration_alcohol_consumption'),
                comments_alcohol=data.get('comments_alcohol'),
                tobacco_y_n=data.get('tobacco_y_n'),
                tobacco_exposure_modes=','.join(data.get('tobacco_exposure_modes', [])),
                tobacco_types=','.join(data.get('tobacco_types', [])),
                tobacco_consumption_age_yrs=data.get('tobacco_consumption_age_yrs'),
                tobacco_frequency=data.get('tobacco_frequency'),
                quantity_tobacco_per_week=data.get('quantity_tobacco_per_week'),
                duration_tobacco_consumption=data.get('duration_tobacco_consumption'),
                comments_tobacco=data.get('comments_tobacco'),
                other_deleterious_habits=data.get('other_deleterious_habits'),
                marital_status=data.get('marital_status'),
                has_children=data.get('children') in ['yes', 'Yes', True],
                daughters=data.get('daughters'),
                sons=data.get('sons'),
                age_at_menarche_yrs=data.get('age_at_menarche'),
                period_type=data.get('period_type'),
                date_last_menstrual_period=data.get('last_menstrual_period'),
                menopause_status=data.get('menopause_status'),
                age_at_menopause_yrs=data.get('age_at_menopause'),
                complications_associated_with_menopause=data.get('menopause_complications'),
                number_conceptions=data.get('conceptions'),
                number_pregnancies=data.get('pregnancy'),
                number_abortions=data.get('abortions'),
                any_complications_during_pregnancy=data.get('pregnancy_complications'),
                age_first_pregnancy=data.get('age_first_pregnancy'),
                breast_feeding=data.get('breastfeeding') in ['yes', 'Yes', True],
                fertility_treatment_y_n=data.get('fertility') in ['yes', 'Yes', True],
                type_fertility_treatment=data.get('fertility_type'),
                details_fertility_treatment=data.get('fertility_details'),
                cycles_fertility_treatment=data.get('fertility_cycles'),
                success_fertility_treatment=data.get('fertility_success') in ['yes', 'Yes', True],
                type_birth_control_used=data.get('birth_control_type'),
                duration_birth_control=data.get('birth_control_duration'),
                details_birth_control=data.get('birth_control_details'),
            )
            return JsonResponse({'message': 'Patient details added successfully'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
        
    return JsonResponse({'error': 'Invalid HTTP method'}, status=405)

def clinical_exam(request, patient_id):
    patient = get_object_or_404(PatientBasicInfo, patient_id=patient_id)

    if request.method == 'GET':
        # try:
            clinical_exam = clinical_examination.objects.get(patient_id=patient)
            data = {
                "arm_edema": clinical_exam.arm_edema,
                "breast_size": clinical_exam.breast_size,
                "ptosis": clinical_exam.ptosis,
                "bra_size": clinical_exam.bra_size,
                "bra_cup_size": clinical_exam. bra_size_cup,
                "lump_in_breast": clinical_exam.lump_in_breast,
                "mastitis_type": clinical_exam.mastitis_type,
                "tenderness": clinical_exam.tenderness,
                "nipple_retraction": clinical_exam.nipple_retraction,
                "discharge": clinical_exam.nipple_discharge,
                "discharge_type": clinical_exam.nipple_discharge_type,
                "skin_change": clinical_exam.skin_change,
                "skin_change_type": clinical_exam.skin_change_type.split(',') if clinical_exam.skin_change_type else [],
                "location_right": clinical_exam.location_right.split(',') if clinical_exam.location_right else [],
                "location_left": clinical_exam.location_left.split(',') if clinical_exam.location_left else [],
                "location_of_lesion": clinical_exam.location_of_lesion,
                "size": clinical_exam.size,
                "consistency": clinical_exam.consistency,
                "sternal_notch_to_nipple": clinical_exam.sternal_notch_to_nipple,
                "tumor_distance_from_nipple": clinical_exam.tumor_distance_from_nipple,
                "distance_from_im_crease": clinical_exam.distance_from_im_crease,
                "skin_tethering": clinical_exam.skin_tethering,
                "local_edema": clinical_exam.local_edema,
                "tumor_breast_ratio": clinical_exam.tumor_breast_ratio
            }
            return JsonResponse(data)
        # except clinical_examination.DoesNotExist:
            return JsonResponse({'error': 'Clinical examination data not found.'}, status=404)

    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            print(data)
            clinical_examination.objects.create(
                patient_id=patient,
                arm_edema=data.get('arm_edema'),
                breast_size=data.get('breast_size'),
                ptosis=data.get('ptosis'),
                bra_size=data.get('bra_size_number'),
                bra_size_cup=data.get('bra_size_cup'),
                lump_in_breast=data.get('lump_in_breast'),
                mastitis_type=data.get('mastitis'),
                tenderness=data.get('tenderness'),
                nipple_retraction=data.get('nipple_retraction'),
                nipple_discharge=data.get('discharge'),
                nipple_discharge_type=data.get('discharge_type'),
                skin_change=data.get('skin_change'),
                skin_change_type=','.join(data.get('skin_change_type', [])),  # List to comma-separated string
                location_right=','.join(data.get('location_right', [])),
                location_left=','.join(data.get('location_left', [])),
                lesion_category=data.get('location_of_lesion_category'),
                lump_size=data.get('lump_size'),
                lump_consistency=data.get('lump_consistency'),
                sternal_notch_to_nipple_distance_cm=data.get('sternal_notch_to_nipple_distance_cm'),
                tumor_distance_from_nipple=data.get('tumor_distance_from_nipple'),
                distance_from_im_crease_lower_quadrant_tumor=data.get('distance_from_im_crease_lower_quadrant_tumor'),
                skin_tethering=data.get('skin_tethering'),
                local_edema=data.get('local_edema'),
                tumor_breast_ratio=data.get('tumor_breast_ratio'),
                palpable_axillary_nodes_location=data.get('axillary_location'),
                palpable_axillary_nodes_fixity=data.get('axillary_fixity'),
                palpable_axillary_nodes_size=data.get('axillary_size'),
                palpable_axillary_nodes_number=data.get('axillary_number'),
                palpable_supraclavicular_nodes_location=data.get('supraclavicular_location'),
                palpable_supraclavicular_nodes_fixity=data.get('supraclavicular_fixity'),
                palpable_supraclavicular_nodes_size=data.get('supraclavicular_size'),
                palpable_supraclavicular_nodes_number=data.get('supraclavicular_number'),
                diagnosis_and_advice_notes=data.get('diagnosis_and_advice_notes'),
                arm_circumfernce_cm=data.get('arm_circumfernce_cm'),
                arm_volume_cc=data.get('arm_volume_cc'),
                arm_to_elbow_cm=data.get('arm_to_elbow_cm'),
                consent=data.get('consent'),
                contralateral_breast=data.get('contralateral_breast'),
                status_of_the_disease=data.get('status_of_the_disease'),
                ecog=data.get('ecog'),
                on_examination_notes=data.get('on_examination_notes'),
                provisional_diagnosis=data.get('provisional_diagnosis'),
                follow_up_advised=data.get('follow_up_advised'),
                comments=data.get('comments'),
            )
            

            return JsonResponse({'message': 'Clinical exam data saved successfully.'}, status=201)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid HTTP method'}, status=405)

def  flight_plan(request,patient_id):
    patient = get_object_or_404(PatientBasicInfo, patient_id=patient_id)
    if request.method=="POST":
        try:
         data = json.loads(request.body)
         flight_plan.objects.create(
             
         )
         return JsonResponse({'message': 'Patient details added successfully'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
        
    return JsonResponse({'error': 'Invalid HTTP method'}, status=405)







# def test_view(request, patient_id):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             pain_info_raw = data.get('pain_info')
#             pain_info = json.loads(pain_info_raw)  # Because it was sent as a JSON string

#             test.objects.create(
#                 patient_id=data.get('patient_id'),
#                 pain_info=pain_info
#             )

#             return JsonResponse({'message': 'Data saved successfully.'}, status=201)
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=400)

#     return JsonResponse({'error': 'Invalid request method.'}, status=405)


