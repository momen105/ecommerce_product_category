const category_names = document.getElementById('category_names')
fetch('/category/')
    .then((response) => response.json()) //converted to object
    .then((category) => {
        const items = category.map((item, index) => {
            console.log(category)
            category_names.innerHTML += ` ${item.name}`
        })
    })