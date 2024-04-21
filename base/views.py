from django.shortcuts import render, redirect
from .models import Entry
from .forms import EntryForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm


def register_user(request):
    form = UserCreationForm()
    if request.user.is_authenticated:
        return redirect('home')

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            login(request, user)
            return redirect('home')
        messages.error(request, "Invalid Credentials")

    context = {'form': form}
    return render(request, 'register.html', context)


def login_user(request):
    if request.user.is_authenticated:
        return redirect('home')

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('login')
        messages.error(request, 'incorrect username or password')

    return render(request, 'login.html')


def logout_user(request):
    logout(request)
    return redirect('login')


@login_required(login_url='login')
def home(request):
    entries = Entry.objects.filter(user=request.user)
    context = {'entries': entries}
    return render(request, 'home.html', context)


@login_required(login_url='login')
def view_entry(request, pk):
    entry = Entry.objects.get(id=pk)
    if request.user != entry.user:
        return HttpResponse("You are not allowed")
    context = {'entry': entry}
    return render(request, 'view_entry.html', context)


@login_required(login_url='login')
def create_entry(request):
    if request.method == 'POST':
        body = request.POST.get('body')
        if len(body) > 15:
            Entry.objects.create(user=request.user, body=body)

        return redirect('home')
    context = {'entry': ''}
    return render(request, 'entry_form.html', context)


@login_required(login_url='login')
def update_entry(request, pk):
    entry = Entry.objects.get(id=pk)
    if request.user != entry.user:
        return HttpResponse("You are not allowed")
    if request.method == 'POST':
        entry.body = request.POST.get('body')
        entry.save()
        return redirect('home')

    context = {'entry': entry}
    return render(request, 'entry_form.html', context)


@login_required(login_url='login')
def delete_entry(request, pk):
    entry = Entry.objects.get(id=pk)
    if request.user != entry.user:
        return HttpResponse("You are not allowed")
    if request.method == 'POST':
        entry.delete()
        return redirect('home')
    context = {'obj': entry}
    return render(request, 'delete.html', context)
