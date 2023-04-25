from django.shortcuts import render
from rest_framework.decorators import api_view
from myapp.utils import process_data
from myapp.forms import CheckboxForm
import json
from django.http import HttpResponse


@api_view(['GET', 'POST'])
def index(request):
    print("\n\n\n")
    if request.method == 'POST':
        print("***********************************************")
        form_data = json.loads(request.body.decode('utf-8'))
        print(form_data)
        form = CheckboxForm(form_data)
        response_data = {'pic1': 'pic1_url'}
        if form.is_valid():
            title = form.cleaned_data['title']
            rm_null_attr = form.cleaned_data['rm_null_attr']
            cld_words = form.cleaned_data['cld_words']
            lang_dist = form.cleaned_data['lang_dist']
            data_dist = form.cleaned_data['data_dist']
            stance_dist = form.cleaned_data['stance_dist']
            local_dist = form.cleaned_data['local_dist']
            topic_detection = form.cleaned_data['topic_detection']
            print("form post succeeded")
            print(title, rm_null_attr, cld_words, lang_dist, data_dist, stance_dist, local_dist, topic_detection)

            print("\n\n\n")
            return HttpResponse(json.dumps(response_data), content_type="application/json")
        else:
            print("form post failed")

            print("\n\n\n")
            return HttpResponse(json.dumps({"error": "failed"}), content_type="application/json")
        # form = CheckboxForm(request.POST)
        # if form.is_valid():

            # title = form.cleaned_data['title']
            # rm_null_attr = form.cleaned_data['rm_null_attr']
            # cld_words = form.cleaned_data['cld_words']
            # lang_dist = form.cleaned_data['lang_dist']
            # data_dist = form.cleaned_data['data_dist']
            # stance_dist = form.cleaned_data['stance_dist']
            # local_dist = form.cleaned_data['local_dist']
            # local_dist = form.cleaned_data['local_dist']


        #     image_urls = process_data(title, rm_null_attr, cld_words, lang_dist, data_dist, stance_dist, local_dist)
        #     context = {'image_urls': image_urls}

        #     return render(request, 'image_view.html', context)
    # else:
    #     form = CheckboxForm()
    # return render(request, 'index.html', {'form': form})