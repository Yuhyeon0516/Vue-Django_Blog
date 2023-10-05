from django.contrib.auth import login, logout, update_session_auth_hash
from django.contrib.auth.views import LoginView, LogoutView, PasswordChangeView
from django.db.models import Count
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic.detail import BaseDetailView
from django.views.generic.edit import BaseCreateView
from django.views.generic.list import BaseListView
from taggit.models import Tag
from accounts.forms import MyUserCreationForm
from api.views_util import make_tag_cloud, obj_to_post, prev_next_post

from blog.models import Post


# Create your views here.
class ApiPostLV(BaseListView):
    def get_queryset(self):
        tagname = self.request.GET.get("tagname")

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


@method_decorator(ensure_csrf_cookie, name="dispatch")
class ApiLoginView(LoginView):
    def form_valid(self, form):
        user = form.get_user()
        login(self.request, user)
        userDict = {
            "id": user.id,
            "username": user.username,
        }

        return JsonResponse(data=userDict, safe=True, status=200)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)


@method_decorator(ensure_csrf_cookie, name="dispatch")
class ApiRegisterView(BaseCreateView):
    form_class = MyUserCreationForm

    def form_valid(self, form):
        self.object = form.save()
        userDict = {
            "id": self.object.id,
            "username": self.object.username,
        }
        return JsonResponse(data=userDict, safe=True, status=201)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiLogoutView(LogoutView):
    @method_decorator(never_cache)
    def dispatch(self, request, *args, **kwargs):
        logout(request)
        return JsonResponse(data={}, safe=True, status=200)


@method_decorator(ensure_csrf_cookie, name="dispatch")
class ApipwdChgView(PasswordChangeView):
    def form_valid(self, form):
        form.save()
        update_session_auth_hash(self.request, form.user)

        return JsonResponse(data={}, safe=True, status=200)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)
