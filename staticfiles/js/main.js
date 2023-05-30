const category_names = document.getElementById('category')
const brands = document.getElementById('brand')
const warranty = document.getElementById('warranty')
const seller_name = document.getElementById('seller')
const products = document.getElementById('product')

fetch('/category/')
    .then((response) => response.json()) //converted to object
    .then((category) => {
        const items = category.map((item, index) => {

            category_names.innerHTML += `<div class="form-check" id="category">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
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
                    <input class="form-check-input" type="checkbox" value="${item.value}" id="flexCheckDefault${index}">
                    <label class="form-check-label" for="flexCheckDefault${index}">
                        ${item.name}
                    </label>
                </div>`;

            // Log the value when the checkbox is clicked
            const checkbox = document.getElementById(`flexCheckDefault${index}`);
            checkbox.addEventListener('click', () => {
                console.log(checkbox.value);
            });
        })
    })
// const checkbox = document.getElementById(checkboxId);
// checkbox.addEventListener('click', () => {
//     if (checkbox.checked) {
//         console.log(`Checked brand ID: ${item.id}`);
//     } else {
//         console.log(`Unchecked brand ID: ${item.id}`);
//     }
// });
fetch('/warranty/')
    .then((response) => response.json())
    .then((brand) => {
        const items = brand.map((item, index) => {
            warranty.innerHTML += `<div class="form-check" id="warranty">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
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
            seller_name.innerHTML += `<div class="form-check" id="seller">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                ${item.name}
            </label>
        </div>`
        })
    })
fetch('/product/')
    .then((response) => response.json())
    .then((product) => {
        const items = product.map((item, index) => {
            let offerPriceHTML = '';
            if (item.offer_price) {
                offerPriceHTML = `<h6 class="text-center" style="color:#708dff">BDT:${item.offer_price}</h6>`;
                PriceHTML = `<h6 class="text-decoration-line-through text-center" style="color:#7E7E7E">BDT:${item.price}</h6>`;
            }
            else {
                PriceHTML = `<h6 class="text-center" style="color:#708dff">BDT:${item.price}</h6>`;
            }
            products.innerHTML += `
            <div class="card col-12 col-md-4">
            <img src="${item.image}" class="card-img-top" style="height:180px" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                ${offerPriceHTML}
                ${PriceHTML}
                <div class="d-flex justify-content-between gap-2">
                    <a href="#" class="btn btn-sm" style="background-color: #708dff">Buy Now</a>
                    <a href="#" class="btn btn-sm" style="background-color: #565656;color:white">Add to cart</a>
                </div>
            </div>
        </div>`
        })
    })