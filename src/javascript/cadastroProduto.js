
const form = document.getElementById("productForm");
const productList = document.getElementById("productList");
const fileInput = document.getElementById("productImage");
const uploadButton = document.querySelector("label[for='productImage']");

// Função para atualizar o nome do botão com o nome do arquivo
fileInput.addEventListener('change', function () {
    const fileName = fileInput.files[0]?.name;
    if (fileName) {
        uploadButton.innerHTML = `<strong>${fileName}</strong>`;
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const name = document.getElementById("productName").value;
    const description = document.getElementById("productDescription").value;
    const imageInput = document.getElementById("productImage");
    const file = imageInput.files[0];

    if (!file) {
        alert("Por favor, insira uma imagem do produto.");
        return;
    }

    const selectedCategories = Array.from(document.querySelectorAll('input[name="productCategory"]:checked'))
        .map(checkbox => checkbox.value)
        .join(', ');

    if (!selectedCategories) {
        alert("Por favor, selecione ao menos uma categoria.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const imageSrc = e.target.result;

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
                    <img src="${imageSrc}" alt="${name}">
                    <div class="product-info">
                        <h2>${name}</h2>
                        <p><span>Categorias:</span> ${selectedCategories}</p>
                        <p>${description}</p>
                    </div>
                `;

        productList.appendChild(productCard);
        form.reset();
        uploadButton.innerHTML = `<strong>Upload da imagem</strong>`;  // Resetando o botão para o texto original
    };

    reader.readAsDataURL(file);
});