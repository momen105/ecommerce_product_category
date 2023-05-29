from django.db.models import Q


def filter_by_category(category):
    return Q(category=category) if category is not None else Q()


def filter_by_brand(brand):
    return Q(brand=brand) if brand is not None else Q()


def filter_by_seller(seller):
    return Q(seller=seller) if seller is not None else Q()


def filter_by_Warranty(warranty):
    return Q(warranty=warranty) if warranty is not None else Q()
