from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('register/', views.register_user, name='register'),
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('create-entry/', views.create_entry, name='create-entry'),
    path('view-entry/<str:pk>', views.view_entry, name='view-entry'),
    path('update-entry/<str:pk>', views.update_entry, name='update-entry'),
    path('delete-entry/<str:pk>', views.delete_entry, name='delete-entry')
]
