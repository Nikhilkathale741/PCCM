from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("register", views.register, name="register"),
    path("logout", views.logout_view, name="logout"),
    path("pccm_details", views.pccm_details_view, name="pccm_details"),
    path("search_result", views.search_patients, name="search_result"),
    path("total_visits", views.total_visits, name="total_visits"),

    # API
    path("visit_details/<int:patient_id>", views.visit_details, name="visit_details"),
    path("add_visit/<int:patient_id>", views.add_visit, name="add_visit"),
    path("p_id_search/<int:patient_id>", views.p_id_search, name="p_id_search"),
    path("file_search/<str:file_number>", views.file_search, name="file_search"),
    path('patient/<int:patient_id>', views.patient_info, name='patient_info'),
    path('clinical_exam/<int:patient_id>', views.clinical_exam, name='clinical_exam'),
    path('flight_plan/<int:patient_id>', views.flight_plan, name='flight_plan'),
    # path('test/<int:patient_id>', views.test_view, name='test'),
]

# Serve static and media files in development (or via Gunicorn without Nginx)
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

