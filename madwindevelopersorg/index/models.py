from django.db import models

class User(models.Model):
    name = models.CharField(max_length=200, default='deleted')
    email = models.EmailField(max_length=200, primary_key=True)

    def __str__(self):
        return self.name

def get_sentinel_user():
    return User.objects.get_or_create(email='deleted@deleted.com')[0]

class Comment(models.Model):
    datetime = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(
        User,
        on_delete=models.SET(get_sentinel_user))
    subject = models.CharField(max_length=256)
    comment = models.TextField()
    
    def __str__(self):
        return self.comment

class Newsletter(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        primary_key=True)
    general = models.BooleanField(default=False)

    def __str__(self):
        if self.general:
            newsletters = 'General'
        return self.user.email + ' : ' + newsletters   