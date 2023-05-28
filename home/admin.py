from django.contrib import admin
from home import models

admin.site.register(models.Category)
admin.site.register(models.Brand)
admin.site.register(models.Warranty)
admin.site.register(models.Seller)
admin.site.register(models.Product)
