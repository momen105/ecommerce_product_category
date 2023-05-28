from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Brand(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Warranty(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Seller(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to="product_image", blank=True)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="product_category"
    )
    brand = models.ForeignKey(
        Brand, on_delete=models.CASCADE, related_name="product_brand"
    )
    warranty = models.ForeignKey(
        Warranty, on_delete=models.CASCADE, related_name="product_warranty"
    )
    seller = models.ForeignKey(
        Seller, on_delete=models.CASCADE, related_name="product_seller"
    )
    price = models.DecimalField(max_digits=10, decimal_places=2)
    offer_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True)

    def __str__(self):
        return self.name
