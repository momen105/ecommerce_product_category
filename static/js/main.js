const categoryNames = document.getElementById('category')
const brands = document.getElementById('brand')
const warranties = document.getElementById('warranty')
const sellerName = document.getElementById('seller')
const products = document.getElementById('product')
const minPrice = document.getElementById('minPriceInput')
const maxPrice = document.getElementById('maxPriceInput')


fetch('/category/')
    .then((response) => response.json()) //converted to object
    .then((category) => {
        const items = category.map((item, index) => {

            categoryNames.innerHTML += `<div class="form-check" id="category">
            <input class="form-check-input" type="checkbox" value="${item.id}" onclick = "productFilter()" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                ${item.name}
            </label>
        </div>`
        })
    })
fetch('/brand/')
    .then((response) => response.json())
    .then((brand) => {
        const items = brand.map((item, index) => {
            brands.innerHTML += `
                <div class="form-check" id="brand">
                <input class="form-check-input" type="checkbox" value="${item.id}" onclick = "productFilter()" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                        ${item.name}
                    </label>
                </div>`;
        })
    })



fetch('/warranty/')
    .then((response) => response.json())
    .then((warranty) => {
        const items = warranty.map((item, index) => {
            warranties.innerHTML += `<div class="form-check" id="warranty">
            <input class="form-check-input" type="checkbox" value="${item.id}" onclick = "productFilter()" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                ${item.name}
            </label>
        </div>`
        })
    })

fetch('/seller/')
    .then((response) => response.json())
    .then((seller) => {
        const items = seller.map((item, index) => {
            sellerName.innerHTML += `<div class="form-check" id="seller">
            <input class="form-check-input" type="checkbox" value="${item.id}" onclick = "productFilter()" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                ${item.name}
            </label>
        </div>`
        })
    })

function productFilter() {
    products.innerHTML = '';
    // Collect the selected filter values
    const selectedFilters = {
        brand: brands.querySelectorAll('input[type="checkbox"]:checked'),
        category: categoryNames.querySelectorAll('input[type="checkbox"]:checked'),
        warranty: warranties.querySelectorAll('input[type="checkbox"]:checked'),
        seller: sellerName.querySelectorAll('input[type="checkbox"]:checked'),

    };

    // Construct the URL based on the selected filters
    let endpoint = '/product/?';

    for (const filterType in selectedFilters) {
        const filterItems = selectedFilters[filterType];
        if (filterItems.length > 0) {
            const filterValues = Array.from(filterItems).map(item => item.getAttribute('value'));
            endpoint += `${filterType}=${filterValues.join(',')}&`;
        }
    }
    if (minPrice.value && maxPrice.value) {

        endpoint += `minp=${minPrice.value}&maxp=${maxPrice.value}`
    }

    fetch(endpoint)
        .then((response) => response.json())
        .then((product) => {
            const items = product.map((item, index) => {
                let offerPriceHTML = '';
                if (item.offer_price) {
                    offerPriceHTML = `<h6 h6 class="text-center" style = "color:#708dff" > BDT:${item.offer_price}</h6 > `;
                    PriceHTML = `<h6 h6 class="text-decoration-line-through text-center" style = "color:#7E7E7E" > BDT:${item.price}</h6 > `;
                }
                else {
                    PriceHTML = `<h6 h6 class="text-center" style = "color:#708dff" > BDT:${item.price}</h6 > `;
                }
                products.innerHTML += `
            <div div class="card col-12 col-md-4" >
                <img src="${item.image}" class="card-img-top" style="height:180px" alt="...">
                    <div class="card-body ">
                        <h5 class="card-title">${item.name}</h5>
                        <div class="py-2">
                            ${offerPriceHTML}
                            ${PriceHTML}
                        </div>
                        <div class="d-flex justify-content-between gap-2">
                            <a href="#" class="btn btn-sm" style="background-color: #708dff">Buy Now</a>
                            <a href="#" class="btn btn-sm" style="background-color: #565656;color:white">Add to cart</a>
                        </div>
                    </div>
                </div>`
            })
        })
}

function getSelectedValue() {
    const selectElement = document.querySelector('.form-select');
    const selectedValue = selectElement.value;

    fetch('/product/')
        .then((response) => response.json())
        .then((product) => {
            if (selectedValue === "1") {
                product.sort((a, b) => a.price - b.price);

            } else if (selectedValue === "2") {
                product.sort((a, b) => b.price - a.price);

            } else {
                product.sort((a, b) => b.id - a.id);

            }
            renderProducts(product)
        }

        );
}

fetch('/product/')
    .then((response) => response.json())
    .then((product) => {
        getSelectedValue()
    });

function getAllProducts() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
    getSelectedValue()
}

function renderProducts(product) {

    products.innerHTML = ''
    const items = product.map((item, index) => {
        let offerPriceHTML = '';
        if (item.offer_price) {
            offerPriceHTML = `<h6 h6 class="text-center" style = "color:#708dff" > BDT:${item.offer_price}</h6 > `;
            PriceHTML = `<h6 h6 class="text-decoration-line-through text-center" style = "color:#7E7E7E" > BDT:${item.price}</h6 > `;
        }
        else {
            PriceHTML = `<h6 h6 class="text-center" style = "color:#708dff" > BDT:${item.price}</h6 > `;
        }
        products.innerHTML += `
            <div div class="card col-12 col-md-4" >
                <img src="${item.image}" class="card-img-top" style="height:180px" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <div class="py-2">
                            ${offerPriceHTML}
                            ${PriceHTML}
                        </div>
                        <div class="d-flex justify-content-between gap-2">
                            <a href="#" class="btn btn-sm" style="background-color: #708dff">Buy Now</a>
                            <a href="#" class="btn btn-sm" style="background-color: #565656;color:white">Add to cart</a>
                        </div>
                    </div>
                </div>`
    })
}