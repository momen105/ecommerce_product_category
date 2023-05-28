from rest_framework import serializers
from home import models


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = "__all__"


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Brand
        fields = "__all__"


class WarrantySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Warranty
        fields = "__all__"


class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Seller
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = "__all__"
