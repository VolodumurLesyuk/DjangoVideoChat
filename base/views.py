from django.shortcuts import render


def room(request):
    return render(request, 'base/room.html')


def lobby(request):
    return render(request, 'base/lobby.html')