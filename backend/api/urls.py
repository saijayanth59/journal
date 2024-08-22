from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from . import views

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('register/', views.CreateUser.as_view(), name="register"),
    path('entry/', views.EntryListCreate.as_view(), name="entry"),
    path('entry/<int:pk>', views.EntryDetails.as_view(), name='entry_details')
]
