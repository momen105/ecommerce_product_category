from django.shortcuts import render
from rest_framework import generics
from . import models
from . import serializers


def home(request):
    return render(request, "home.html", context={})


class CategoryView(generics.ListCreateAPIView, generics.RetrieveUpdateAPIView):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer

    lookup_field = "id"


class BrandView(generics.ListCreateAPIView, generics.RetrieveUpdateAPIView):
    queryset = models.Brand.objects.all()
    serializer_class = serializers.BrandSerializer
    lookup_field = "id"


class WarrantyView(generics.ListCreateAPIView, generics.RetrieveUpdateAPIView):
    queryset = models.Warranty.objects.all()
    serializer_class = serializers.WarrantySerializer

    lookup_field = "id"


class SellerView(generics.ListCreateAPIView, generics.RetrieveUpdateAPIView):
    queryset = models.Seller.objects.all()
    serializer_class = serializers.SellerSerializer
    lookup_field = "id"


class ProductView(generics.ListCreateAPIView, generics.RetrieveUpdateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializer

    lookup_field = "id"
