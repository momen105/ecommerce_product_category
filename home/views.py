from django.shortcuts import render
from rest_framework import generics, response
from . import models
from . import serializers
from .query import (
    filter_by_brand,
    filter_by_category,
    filter_by_seller,
    filter_by_Warranty,
)


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

    def get(self, request, *args, **kwargs):
        params = request.query_params
        category = params.get("category")
        brand = params.get("brand")
        warranty = params.get("warranty")
        seller = params.get("seller")
        products = self.queryset.filter(
            filter_by_category(category),
            filter_by_brand(brand),
            filter_by_Warranty(warranty),
            filter_by_seller(seller),
        ).order_by("-id")
        serializers = self.serializer_class(products, many=True)
        return response.Response(serializers.data)
