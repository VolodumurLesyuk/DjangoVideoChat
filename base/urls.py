from django.urls import path

from .views import room, lobby


urlpatterns = [
    path('', lobby),
    path('room/', room),
]