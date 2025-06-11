
# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    pass

class patient_info(models.Model):
    File_No=models.PositiveIntegerField(blank=False,null=False,unique=True)
    Patient_Name=models.CharField(max_length=50)
    Next_Appointment_Date=models.DateField(auto_now=False, auto_now_add=False)
    Last_Visit_Date=models.DateField(auto_now=False, auto_now_add=False)
    Contact_No=models.PositiveIntegerField(blank=False,null=False,unique=True)

class PatientBasicInfo(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('T', 'Third Gender'),
    ]

    BLOOD_GROUP_CHOICES = [
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
    ]

    first_name = models.CharField(max_length=100, blank=True)
    middle_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)
    full_name = models.CharField(max_length=200)

    date_of_birth = models.DateField(null=True, blank=True)
    estimated_dob = models.BooleanField(default=False)

    age_years = models.PositiveIntegerField(null=True, blank=True)
    age_months = models.PositiveIntegerField(null=True, blank=True)
    age_days = models.PositiveIntegerField(null=True, blank=True)

    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    blood_group = models.CharField(max_length=3, choices=BLOOD_GROUP_CHOICES, blank=True, null=True)
    religion = models.CharField(max_length=100, blank=True)

    education = models.CharField(max_length=150, blank=True)
    occupation = models.CharField(max_length=150, blank=True)

    # ----- Contact Details -----
    mobile_number = models.CharField(max_length=15)
    email = models.EmailField(blank=True)
    id_proof = models.CharField(max_length=100, blank=True)
    id_number = models.CharField(max_length=100, blank=True)

    # ----- Emergency Contact -----
    emergency_contact_person = models.CharField(max_length=150)
    emergency_relation = models.CharField(max_length=100, blank=True)
    emergency_mobile_number = models.CharField(max_length=15)
    emergency_landline_number = models.CharField(max_length=15, blank=True)

    # ----- Permanent Address -----
    permanent_address = models.TextField()
    permanent_city = models.CharField(max_length=100)
    permanent_pincode = models.CharField(max_length=10)
    permanent_state_ut = models.CharField(max_length=100)

    # ----- Current Address -----
    is_current_same_as_permanent = models.BooleanField(default=False)
    current_address = models.TextField(blank=True)
    current_city = models.CharField(max_length=100, blank=True)
    current_pincode = models.CharField(max_length=10, blank=True)
    current_state_ut = models.CharField(max_length=100, blank=True)

    # Registration ID & Associated Details
    patient_id = models.CharField(max_length=50, unique=True,primary_key=True)
    file_number = models.CharField(max_length=50, blank=True)
    team = models.CharField(max_length=100, blank=True)
    primary_consultant = models.CharField(max_length=100, blank=True)
    patient_type = models.CharField(max_length=50, blank=True)
    date_of_registration = models.DateField(null=True, blank=True)
    referral_source = models.CharField(max_length=150, blank=True)
    jehangir_id = models.CharField(max_length=50, blank=True)

class Visit(models.Model):
    Visit_type= [
        ('A', 'A'),
        ('B', 'A'),
        ('C', 'C'),
    ]
    patient_id=models.ForeignKey(PatientBasicInfo,on_delete=models.CASCADE)
    visit_date = models.DateField(null=True, blank=True)
    visit_type = models.CharField(max_length=255,choices=Visit_type,null=True, blank=True)
    investigation_intervention_advised1 = models.CharField(max_length=255, null=True, blank=True)
    date_investigation_intervention_done1 = models.DateField(null=True, blank=True)
    investigation_intervention_advised2 = models.CharField(max_length=255, null=True, blank=True)
    date_investigation_intervention_done2 = models.DateField(null=True, blank=True)
    investigation_intervention_advised3 = models.CharField(max_length=255, null=True, blank=True)
    date_investigation_intervention_done3 = models.DateField(null=True, blank=True)
    notes = models.TextField(null=True, blank=True)
    next_visit_date = models.DateField(null=True, blank=True)

    def serialize(self):
        return {
            "id": self.id,
            "visit_date":self.visit_date.strftime("%b %d %Y, %I:%M %p"),
            "visit_type": self.visit_type,
            "TypeofInvestigation":self.investigation_intervention_advised1,
            "DateofInvestigation":self.date_investigation_intervention_done1,
            "Notes":self.notes,
            "NextVisitDate":self.next_visit_date.strftime("%b %d %Y, %I:%M %p")
        }

class patientinformationhistory(models.Model):
    INCOME_CHOICES = [
        ('0-2.5', '0–2.5 Lakhs'),
        ('2.5-5', '2.5–5 Lakhs'),
        ('5-10', '5–10 Lakhs'),
        ('>10', '>10 Lakhs'),
    ]
    YES_NO_CHOICES = [
        ('yes', 'Yes'),
        ('no', 'No'),
    ]

    DIET_CHOICES = [
        ('vegetarian', 'Vegetarian'),
        ('non_vegetarian', 'Non-Vegetarian'),
        ('ovo_vegetarian', 'Ovo-Vegetarian'),
        ('other', 'Other'),
    ]

    TOBACCO_EXPOSURE_CHOICES = [
        ('home', 'Home'),
        ('work', 'Work'),
        ('commute', 'Commute'),
        ('social', 'Social'),
    ]

    TOBACCO_TYPE_CHOICES = [
        ('cigarette', 'Cigarette'),
        ('beedi', 'Beedi'),
        ('gutkha', 'Gutkha'),
        ('hookah', 'Hookah'),
        ('patch', 'Patch'),
        ('other', 'Other'),
    ]

    patient_id=models.ForeignKey(PatientBasicInfo,on_delete=models.CASCADE)
    height = models.DecimalField(max_digits=5, decimal_places=2,null=True, blank=True)  # e.g. 170.50 cm
    weight = models.DecimalField(max_digits=5, decimal_places=2,null=True, blank=True)  # e.g. 65.25 kg
    bmi = models.DecimalField(max_digits=5, decimal_places=2,null=True, blank=True)
    annual_household_income = models.CharField(max_length=10, choices=INCOME_CHOICES,null=True, blank=True)
    supplement_taken = models.BooleanField() 
    supplement_type = models.CharField(max_length=255, blank=True, null=True)
    supplement_quantity = models.CharField(max_length=100, blank=True, null=True)
    supplement_duration = models.CharField(max_length=100, blank=True, null=True)
    physical_activity_y_n = models.CharField(max_length=3, choices=YES_NO_CHOICES, null=True, blank=True)
    type_physical_activity = models.TextField(null=True, blank=True)
    frequency_physical_activity = models.TextField(null=True, blank=True)
    diet = models.TextField(null=True, blank=True)
    alcohol_y_n = models.CharField(max_length=3, choices=YES_NO_CHOICES, null=True, blank=True)
    alcohol_consumption_age_yrs = models.CharField(max_length=10, null=True, blank=True)
    quantity_alcohol_per_week = models.CharField(max_length=50, null=True, blank=True)
    duration_alcohol_consumption = models.CharField(max_length=50, null=True, blank=True)
    comments_alcohol = models.TextField(null=True, blank=True)
    tobacco_y_n = models.CharField(max_length=3, choices=YES_NO_CHOICES, null=True, blank=True)
    tobacco_exposure_modes = models.TextField(null=True, blank=True)  # Store comma-separated: e.g., "home,work"
    tobacco_types = models.TextField(null=True, blank=True)  # Store comma-separated: e.g., "cigarette,hookah"
    tobacco_consumption_age_yrs = models.CharField(max_length=10, null=True, blank=True)
    tobacco_frequency = models.CharField(max_length=50, null=True, blank=True)
    quantity_tobacco_per_week = models.CharField(max_length=50, null=True, blank=True)
    duration_tobacco_consumption = models.CharField(max_length=50, null=True, blank=True)
    comments_tobacco = models.TextField(null=True, blank=True)
    other_deleterious_habits = models.TextField(null=True, blank=True)
    marital_status = models.CharField(max_length=20, null=True, blank=True)
    has_children = models.BooleanField(null=True)  # yes/no radio button
    daughters = models.IntegerField(null=True, blank=True)
    sons = models.IntegerField(null=True, blank=True)
    age_at_menarche_yrs = models.IntegerField(null=True, blank=True)
    period_type = models.CharField(max_length=50, null=True, blank=True)
    date_last_menstrual_period = models.DateField(null=True, blank=True)
    menopause_status = models.CharField(max_length=50, null=True, blank=True)
    age_at_menopause_yrs = models.IntegerField(null=True, blank=True)
    complications_associated_with_menopause = models.TextField(null=True, blank=True)
    number_conceptions = models.IntegerField(null=True, blank=True)
    number_pregnancies = models.IntegerField(null=True, blank=True)
    number_abortions = models.IntegerField(null=True, blank=True)
    any_complications_during_pregnancy = models.TextField(null=True, blank=True)
    age_first_pregnancy = models.IntegerField(null=True, blank=True)
    breast_feeding = models.BooleanField(null=True)  # yes/no radio button
    fertility_treatment_y_n = models.BooleanField(null=True)  # yes/no radio button
    type_fertility_treatment = models.CharField(max_length=100, null=True, blank=True)
    details_fertility_treatment = models.TextField(null=True, blank=True)
    cycles_fertility_treatment = models.IntegerField(null=True, blank=True)
    success_fertility_treatment = models.BooleanField(null=True)  # yes/no radio button
    type_birth_control_used = models.CharField(max_length=100, null=True, blank=True)
    duration_birth_control = models.CharField(max_length=100, null=True, blank=True)
    details_birth_control = models.TextField(null=True, blank=True)
    current_breast_cancer_detected_by = models.TextField(null=True)
    current_breast_cancer_detected_date = models.TextField(null=True)
    
class clinical_examination (models.Model):
    SIDE_CHOICES=[
        ('right', 'Right'),
        ('left', 'Left'),
        ('both', 'Both'),
        ('absent', 'Absent'),
     ]
    
    BREAST_SIZE_CHOICES = [
        ('Extra Small', 'Extra Small'),
        ('Small', 'Small'),
        ('Medium', 'Medium'),
        ('Large', 'Large'),
    ]

    PTOSIS_CHOICES = [
        ('grade1', 'Grade 1 (Mid)'),
        ('grade2', 'Grade 2 (Moderate)'),
        ('grade3', 'Grade 3 (Advanced)'),
        ('pseudoptosis', 'Pseudoptosis'),
        ('maldistribution', 'Parenchymal Maldistribution'),
    ]
    LUMP_CHOICES = [
        ('definitely_palpable', 'Definitely Palpable'),
        ('vaguely_palpable', 'Vaguely Palpable'),
        ('diffuse', 'Diffuse'),
        ('no', 'No'),
    ]
    
    MASTITIS_CHOICES = [
        ('diffuse', 'Diffuse'),
        ('sectoral', 'Sectoral'),
    ]
    
    DISCHARGE_TYPE_CHOICES = [
        ('serous', 'Serous'),
        ('milky', 'Milky'),
        ('brown', 'Brown'),
        ('bloody', 'Bloody'),
    ]

    CONSISTENCY_CHOICES = [
        ('soft', 'Soft'),
        ('firm', 'Firm'),
        ('hard', 'Hard'),
        ('cystic', 'Cystic'),
        ('mobile', 'Mobile'),
    ]

    SIZE_CHOICES = [
        ('<2', '< 2 cm'),
        ('2-5', '2–5 cm'),
        ('>5', '> 5 cm'),
        ('nil', 'Nil'),
    ]

    FIXITY = [
    ('yes', 'Yes'),
    ('no', 'No'),
    ]

    CONSENT = [
    ('yes', 'Yes'),
    ('no', 'No'),
    ('discussed','Discussed')
    ]

    CONTRALATERAL = [
    ('normal', 'Normal'),
    ('diffuse_mastitis', 'Diffuse Mastitis'),
    ('localised_mastitis', 'Localised Mastitis'),
    ]


    patient_id=models.ForeignKey(PatientBasicInfo,on_delete=models.CASCADE)
    surgery_id=models.IntegerField(null=True,blank=True)
    arm_edema = models.CharField(max_length=15, choices=SIDE_CHOICES, null=True, blank=True)
    breast_size = models.CharField(max_length=15, choices=BREAST_SIZE_CHOICES, null=True, blank=True)
    ptosis = models.CharField(max_length=30, choices=PTOSIS_CHOICES, null=True, blank=True)
    bra_size = models.FloatField(null=True, blank=True)
    bra_size_cup = models.CharField(max_length=10, null=True, blank=True)
    lump_in_breast = models.CharField(max_length=30, choices=LUMP_CHOICES, null=True, blank=True)
    mastitis_type = models.CharField(max_length=15, choices=MASTITIS_CHOICES, null=True, blank=True)
    tenderness = models.CharField(max_length=15, choices=SIDE_CHOICES, null=True, blank=True)
    nipple_retraction = models.CharField(max_length=15, choices=SIDE_CHOICES, null=True, blank=True)
    nipple_discharge = models.CharField(max_length=15, choices=SIDE_CHOICES, null=True, blank=True)
    nipple_discharge_type = models.CharField(max_length=15, choices=DISCHARGE_TYPE_CHOICES, null=True, blank=True)
    skin_change = models.CharField(max_length=15, choices=SIDE_CHOICES, null=True, blank=True)
    skin_change_type = models.TextField(null=True, blank=True)
    location_right = models.TextField(null=True, blank=True)
    location_left = models.TextField(null=True, blank=True)
    lesion_category = models.CharField(max_length=100, null=True, blank=True)
    location_picture = models.FileField(upload_to='lesion_pictures/', null=True, blank=True)
    lump_size = models.CharField(max_length=15, choices=SIZE_CHOICES, null=True, blank=True)
    lump_consistency = models.CharField(max_length=15, choices=CONSISTENCY_CHOICES, null=True, blank=True)
    sternal_notch_to_nipple_distance_cm = models.CharField(max_length=15, null=True, blank=True)
    tumor_distance_from_nipple = models.CharField(max_length=15, null=True, blank=True)
    distance_from_im_crease_lower_quadrant_tumor = models.CharField(max_length=15, null=True, blank=True)
    skin_tethering = models.CharField(max_length=50, null=True, blank=True)
    local_edema = models.CharField(max_length=50, null=True, blank=True)
    tumor_breast_ratio = models.FloatField(null=True, blank=True)
    palpable_axillary_nodes_location = models.CharField(max_length=15,choices=SIDE_CHOICES,null=True, blank=True)
    palpable_axillary_nodes_number = models.TextField(max_length=15,null=True, blank=True)
    palpable_axillary_nodes_size = models.FloatField(max_length=15,null=True, blank=True)
    palpable_axillary_nodes_fixity = models.CharField(max_length=15,choices=FIXITY,null=True, blank=True)
    palpable_supraclavicular_nodes_location = models.CharField(max_length=15, choices=SIDE_CHOICES,null=True, blank=True)
    palpable_supraclavicular_nodes_number = models.FloatField(max_length=15,null=True, blank=True)
    palpable_supraclavicular_nodes_size = models.FloatField(max_length=15,null=True, blank=True)
    palpable_supraclavicular_nodes_fixity = models.CharField(max_length=15,choices=FIXITY,null=True, blank=True)
    arm_circumfernce_cm = models.FloatField(max_length=15,null=True, blank=True)
    arm_volume_cc = models.FloatField(max_length=15,null=True, blank=True)
    arm_to_elbow_cm = models.FloatField(max_length=15,null=True, blank=True)
    consent = models.TextField(null=True,choices=CONSENT,blank=True)
    contralateral_breast = models.TextField(max_length=50,null=True,choices=CONTRALATERAL,blank=True)
    diagnosis_and_advice_notes = models.TextField(null=True, blank=True)
    status_of_the_disease = models.TextField(null=True, blank=True)
    ecog = models.FloatField(null=True, blank=True)
    on_examination_notes = models.TextField(null=True, blank=True)
    provisional_diagnosis = models.TextField(null=True, blank=True)
    follow_up_advised = models.TextField(null=True, blank=True)
    comments = models.TextField(null=True, blank=True)

class test(models.Model):
     patient_id=models.ForeignKey(PatientBasicInfo,on_delete=models.CASCADE)
     pain_info = models.CharField(max_length=100)