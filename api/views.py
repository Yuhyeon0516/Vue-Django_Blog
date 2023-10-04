from django.http import JsonResponse
from django.views.generic.detail import BaseDetailView
from django.views.generic.list import BaseListView
from api.views_util import obj_to_post, prev_next_post
from taggit.models import Tag

from blog.models import Post


# Create your views here.
class ApiPostLV(BaseListView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        querySet = context["object_list"]
        postList = [obj_to_post(obj) for obj in querySet]

        return JsonResponse(data=postList, safe=False, status=200)


class ApiPostDV(BaseDetailView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        obj = context["object"]
        post = obj_to_post(obj)
        post["prev"], post["next"] = prev_next_post(obj)

        return JsonResponse(data=post, safe=True, status=200)


class ApiTagCloudLV(BaseListView):
    model = Tag

    def render_to_response(self, context, **response_kwargs):
        querySet = context["object_list"]
        tagList = []
        for obj in querySet:
            tagList.append(
                {
                    "name": obj.name,
                    # "count": obj.count,
                    # "weight": obj.name,
                }
            )

        return JsonResponse(data=tagList, safe=False, status=200)
