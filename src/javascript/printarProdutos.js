document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://sa-intelbras-api.onrender.com/products');
        
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
            <button class="updateProductBtn" style="display:none" data-id="${product.id}" onclick="openModalUpdate(this)">Editar</button>
            <button class="confirmUpdateProductBtn" style="display:none" data-id="${product.id}  " >Confirmar</button>
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

        function openModalUpdate(btn) {
            const parentDiv = btn.closest('.product'); 
            parentDiv.querySelector(".confirmUpdateProductBtn").style.display="block"
            parentDiv.querySelector("h3").setAttribute("contenteditable",true)
            parentDiv.querySelector("h3").focus()

            parentDiv.querySelector(".confirmUpdateProductBtn").onclick= () => updateProduct(btn.getAttribute("data-id"), parentDiv.querySelector("h3").innerText)
        }
        
        function fecharModall(modalId) {
            const modal = document.getElementById(modalId);
            modal.style.display = "none";
            document.querySelector(".overlay").classList.add("removeOverlay")

        }

        const updateProduct = async (id,newName) => {
      
            console.log(newName);
            try {
                const response = await fetch(`https://sa-intelbras-api.onrender.com/products/${id}`, {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify({ 
                      name: newName, 
                    }), 
                  });
          
              if (!response.ok) {
                const errorData = await response.json();
                console.error('Erro ao atualizar o produto:', errorData);
                return errorData;
              }
          
              const updatedProduct = await response.json();
              console.log('Produto atualizado com sucesso:', updatedProduct);
              location.reload()
              return updatedProduct;
            } catch (error) {
              console.error('Erro na requisição:', error);
              throw error;
            }
          };
          
    