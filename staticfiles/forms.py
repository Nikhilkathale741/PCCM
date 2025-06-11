from django import forms
from .models import PatientBasicInfo

class PatientBasicInfoForm(forms.ModelForm):
    class Meta:
        model = PatientBasicInfo
        fields = '__all__'  # or list specific fields if needed

        widgets = {
            'date_of_birth': forms.DateInput(attrs={'type': 'date'}),
            'date_of_registration': forms.DateInput(attrs={'type': 'date'}),
            'age_years': forms.NumberInput(attrs={'readonly': 'readonly'}),
            'age_months': forms.NumberInput(attrs={'readonly': 'readonly'}),
            'age_days': forms.NumberInput(attrs={'readonly': 'readonly'}),
            'is_current_same_as_permanent': forms.CheckboxInput(),
            'gender': forms.RadioSelect(choices=PatientBasicInfo.GENDER_CHOICES),
        }