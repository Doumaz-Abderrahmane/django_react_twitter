from django.shortcuts import render
from rest_framework.decorators import api_view
from myapp.utils import process_data
from myapp.forms import CheckboxForm


@api_view(['GET', 'POST'])
def index(request):
    if request.method == 'POST':
        form = CheckboxForm(request.POST)
        if form.is_valid():

            title = form.cleaned_data['title']
            rm_null_attr = form.cleaned_data['rm_null_attr']
            cld_words = form.cleaned_data['cld_words']
            lang_dist = form.cleaned_data['lang_dist']
            data_dist = form.cleaned_data['data_dist']
            stance_dist = form.cleaned_data['stance_dist']
            local_dist = form.cleaned_data['local_dist']
            local_dist = form.cleaned_data['local_dist']


            image_urls = process_data(title, rm_null_attr, cld_words, lang_dist, data_dist, stance_dist, local_dist)
            context = {'image_urls': image_urls}

            return render(request, 'image_view.html', context)
    else:
        form = CheckboxForm()
    return render(request, 'index.html', {'form': form})