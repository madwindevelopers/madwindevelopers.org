from django.contrib import admin

from .models import Comment, User, Newsletter

admin.site.register(User)
admin.site.register(Comment)
admin.site.register(Newsletter)
