from typing import Any
from django.db.models import Count
from django.db.models.query import QuerySet
from django.http import JsonResponse
from django.views.generic.detail import BaseDetailView
from django.views.generic.list import BaseListView
from taggit.models import Tag
from api.views_util import make_tag_cloud, obj_to_post, prev_next_post

from blog.models import Post


# Create your views here.
class ApiPostLV(BaseListView):
    def get_queryset(self):
        tagname = self.request.GET.get("tagname").split("/")[0]

        if tagname:
            qs = Post.objects.filter(tags__name=tagname)
        else:
            qs = Post.objects.all()

        return qs

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
    queryset = Tag.objects.annotate(count=Count("post"))

    def render_to_response(self, context, **response_kwargs):
        qs = context["object_list"]
        tagList = make_tag_cloud(qs)

        return JsonResponse(data=tagList, safe=False, status=200)
