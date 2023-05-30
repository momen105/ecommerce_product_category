from django.db.models import Q


def filter_by_category(category):
    return Q(category__in=category.split(",")) if category is not None else Q()


def filter_by_brand(brand):
    return Q(brand__in=brand.split(",")) if brand is not None else Q()


def filter_by_seller(seller):
    return Q(seller__in=seller.split(",")) if seller is not None else Q()


def filter_by_Warranty(warranty):
    return Q(warranty__in=warranty.split(",")) if warranty is not None else Q()


def filter_by_price(min_price, max_price):
    return (
        Q(price__range=(min_price, max_price))
        if (min_price and max_price) is not None
        else Q()
    )
