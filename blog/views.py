from django.views.generic import TemplateView

from blog.models import Post


# Create your views here.


class PostListTV(TemplateView):
    model = Post
    template_name = "blog/post_list.html"


class PostDetailTV(TemplateView):
    model = Post
    template_name = "blog/post_detail.html"
