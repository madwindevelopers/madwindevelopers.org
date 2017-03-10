from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect
from .models import Comment, User, Newsletter
from django.shortcuts import render

@csrf_protect
def index(request):
    return render(request, 'index.html')

@csrf_protect
def comment(request):
    if request.method == 'GET':
        data = request.GET
    elif request.method == 'POST':
        data = request.POST
        
    user = User.objects.get_or_create(email=data['email'])[0]
    user.name = data['name']
    user.save()
    
    c = Comment(
        user=user,
        subject=data['subject'],
        comment=data['comment'])
    c.save()

    return HttpResponse("We have received your message and will respond as soon as possible.  Thank you.")
    
@csrf_protect
def add_email(request):
    if request.method == 'GET':
        data = request.GET
    elif request.method == 'POST':
        data = request.POST

    n = Newsletter(
        user=User.objects.get_or_create(email=data['email'])[0],
        general=True
    )
    n.save()

    return HttpResponse(data['email'] + " has been subrscribed to the newsletter.")