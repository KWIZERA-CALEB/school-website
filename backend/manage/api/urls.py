from django.urls import path
from . import views

urlpatterns = [
    path('routes/', views.getRoutes),
    path('add-event/', views.createNewEvent),
]