# from django.contrib import admin
import sys
from django.urls import path
from myapp import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    # path('image_processing/', image_processing_view, name='process_images'),
]
