document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3000/products');
        
        if (!response.ok) {
            throw new Error('Erro ao carregar os produtos');
        }
        const products = await response.json();
        const productsArray = products.products;

        const productsContainer = document.querySelector('.products');
        
        console.log("DATA");
        console.log(productsArray);
        
        productsArray.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            
            const modalId = `modal${product.id}`;
            const modal = document.createElement('div');
            modal.id = modalId;
            modal.classList.add('modal');
            
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close" onclick="fecharModall('${modalId}')">&times;</span>
                    <img src="${product.imageUrl}" alt="${product.name}" class="modal-image">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                </div>
            `;
        
            productElement.innerHTML = `
                <button class="removeProductBtn" style="display:none" data-id="${product.id}" onclick="deleteProduct(this)">Remover</button>
                <img src="${product.imageUrl}" alt="${product.name}" class="modal-image">
                <h3>${product.name}</h3>
                <button class="openModalBtn ver-mais" onclick="openModal('${modalId}')">Ver mais</button>
            `;
            
            productsContainer.appendChild(productElement);
            document.body.appendChild(modal); 
        });
       
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        document.querySelector('.products').innerHTML = '<p>Ocorreu um erro ao carregar os produtos.</p>';
    }
});

 
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
            document.querySelector(".overlay").classList.remove("removeOverlay")
            document.querySelector(".overlay").style.display="block"

        }
        
        function fecharModall(modalId) {
            const modal = document.getElementById(modalId);
            modal.style.display = "none";
            document.querySelector(".overlay").classList.add("removeOverlay")

        }