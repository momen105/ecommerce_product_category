from django.urls import path
from . import views

app_name = "home"

urlpatterns = [
    path("", views.home, name="home"),
    path("category/", views.CategoryView.as_view(), name="category"),
    path("brand/", views.BrandView.as_view(), name="brand"),
    path("warranty/", views.WarrantyView.as_view(), name="warranty"),
    path("seller/", views.SellerView.as_view(), name="seller"),
    path("product/", views.ProductView.as_view(), name="product"),
]
