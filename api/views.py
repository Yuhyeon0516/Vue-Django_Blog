from django.http import JsonResponse
from django.views.generic import ListView
from api.views_util import obj_to_post

from blog.models import Post


# Create your views here.
class ApiPostLV(ListView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        querySet = context["object_list"]
        postList = [obj_to_post(obj) for obj in querySet]

        return JsonResponse(data=postList, safe=False, status=200)
