const inputSearch = document.getElementById("search-input")
const products = document.querySelectorAll(".product-item")
const buttons = document.querySelectorAll(".filter")
const priceButton = document.getElementById("search-price").querySelector('button')

const searchHandler = (e) => {
    searchValue = e.target.value.trim().toLowerCase()
    products.forEach(product => {
        const productName = product.children[1].innerText.toLowerCase()
        if (productName.includes(searchValue)) {
            product.style.display = "block"
        } else {
            product.style.display = "none"
        }
    })
}
const changeClass = (filter) => {
    buttons.forEach(button => {
        if (button.dataset.filter === filter) {
            button.classList.add("selected")
        } else {
            button.classList.remove("selected")
        }
    })
}
const filterHandler = (e) => {
    const filter = e.target.dataset.filter

    products.forEach(product => {
        const category = product.dataset.category
        if (filter === "all") {
            product.style.display = "block"
        } else {
            category === filter ? product.style.display = "block" : product.style.display = "none"
        }
    })

    changeClass(filter)
}
const searchPriceHandler = (e) => {
    const searchPrice = +e.target.parentElement.children[0].value
    products.forEach(product => {
        const productPrice = +product.children[2].innerText.split(" ")[1]
        if (!searchPrice) {
            product.style.display = " block"
        } else {

            (productPrice === searchPrice ? product.style.display = " block" : product.style.display = "none")
        }
    })
}


start = () => {
    inputSearch.addEventListener("keyup", searchHandler)

    buttons.forEach(button => {
        button.addEventListener("click", filterHandler)
    })
    priceButton.addEventListener("click", searchPriceHandler)
}


window.addEventListener("load", start)