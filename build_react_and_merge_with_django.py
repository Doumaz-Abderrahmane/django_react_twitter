import shutil
import os

# os.chdir('./react-app/')
# os.system('npm run build')
# os.chdir('../')

static_dir_react = './react-app/build/static/'
static_dir_django = './django_backend/myproject/myapp/static/'

shutil.rmtree(static_dir_django)
os.replace(static_dir_react, static_dir_django)

# for filename in os.listdir(static_dir_react):
#     src_path = os.path.join(static_dir_react, filename)
#     dst_path = os.path.join(static_dir_django, filename)
#     if os.path.exists(dst_path):
#         os.replace(src_path, dst_path)
#     else:
#         os.rename(src_path, dst_path)

# index_react = './react-app/build/index.html'
# index_django = './django_backend/myproject/myapp/templates/index.html'

# os.rename(index_react, index_django)

