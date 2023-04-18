# Add your code
put your function call in the utils.py file in the function named
//
process_data(...)
//
the file is located at
//
django_backend/myprojet/myapp/utils.py
//

your code should save the output images in the static folder
//
django_backend/myprojet/myapp/static/your_images_folder
//

and make sure to reaturn the images paths in the *process_data* function.

if you want to send the images directly to the frontend see this stack overflow question:
[page url here](https://stackoverflow.com/questions/57068127/matplotlib-image-not-displaying-in-django-template)



# Run the server

run the django part using:
//
python django_backend/myproject/manage.py runserver
//


# Notes
You cann add your own styling because there is no style yet.
This is project currently done using only the django templates,
the react part is still in the development is not working currently.