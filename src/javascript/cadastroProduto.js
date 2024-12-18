const fileInput = document.getElementById("productImage");
const uploadButton = document.querySelector(".uploadButton");
fileInput.addEventListener('change', function () {
    const fileName = fileInput.files[0]?.name;
    if (fileName) {
        uploadButton.innerHTML = `<strong>${fileName}</strong>`;
    }
});


document.getElementById('productForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const category = document.querySelector('input[name="productCategory"]:checked')?.value;
    const image = document.getElementById('productImage').files[0]; 

    if (!category) {
        alert('Por favor, selecione uma categoria.');
        return;
    }

    if (!image) {
        alert('Por favor, selecione uma imagem.');
        return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('image', image); // Append the image file

    try {
        const response = await fetch('https://sa-intelbras-api.onrender.com/products', {
            method: 'POST',
            body: formData,
        });

        // Handle the response
        const result = await response.json();

        if (response.ok) {
            document.querySelector("#productList").style.display = "block";
            document.querySelector("#productList").style.overflow = 'auto';
            document.querySelector("#productList").innerHTML += `
                <div style="display:flex; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    <i class="uil uil-check-circle"></i>
                    <p style="max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                        ${name} cadastrado com sucesso!
                    </p>
                </div>
                </br>`;
            document.getElementById('productForm').reset();
        } else {
            alert(result.message || 'Erro ao cadastrar o produto.');
        }
    } catch (error) {
        console.error('Erro ao enviar a solicitação:', error);
        alert('Ocorreu um erro inesperado. Tente novamente mais tarde.');
    }
});
