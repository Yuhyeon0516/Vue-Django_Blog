from django.urls import path

from api import views

app_name = "api"
urlpatterns = [
    # post read
    path("post/list/", views.ApiPostLV.as_view(), name="post_list"),
    path("post/<int:pk>/", views.ApiPostDV.as_view(), name="post_detail"),
    # tag
    path("tag/cloud/", views.ApiTagCloudLV.as_view(), name="tag_cloud"),
    # account
    path("login/", views.ApiLoginView.as_view(), name="login"),
    path("register/", views.ApiRegisterView.as_view(), name="register"),
    path("logout/", views.ApiLogoutView.as_view(), name="logout"),
    path("pwdchg/", views.ApipwdChgView.as_view(), name="pwdchg"),
    path("me/", views.ApiMeView.as_view(), name="me"),
    # post create, update, delete
    path("post/create/", views.ApiPostCV.as_view(), name="post_create"),
]
