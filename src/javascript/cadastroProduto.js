document.getElementById('productForm').addEventListener('submit', async (event) => {
    event.preventDefault(); 

    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const category = document.querySelector('input[name="productCategory"]:checked')?.value;
    const image = document.getElementById('productImage').files[0]; // Get the file from the input
    console.log(image)
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
        const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            body: formData, 
        });

        // Handle the response
        const result = await response.json();

        if (response.ok) {
            document.querySelector("#productList").style.display = "block";
            document.querySelector("#productList").innerHTML += `<div style="display:flex;">
                <i class="uil uil-check-circle"></i>
                <p>${name} cadastrado com sucesso!</p></div></br>`;
            document.getElementById('productForm').reset();
        } else {
            alert(result.message || 'Erro ao cadastrar o produto.');
        }
    } catch (error) {
        console.error('Erro ao enviar a solicitação:', error);
        alert('Ocorreu um erro inesperado. Tente novamente mais tarde.');
    }
});