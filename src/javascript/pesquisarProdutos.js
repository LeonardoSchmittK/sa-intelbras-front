function pesquisarProdutos(text) {
    const products = [...document.querySelectorAll(".product")];

    products.forEach(prod => {
        if (prod.innerText.toLowerCase().includes(text.toLowerCase())) {
            prod.style.display = "block";
        } else {
            prod.style.display = "none";
        }
    });
}
