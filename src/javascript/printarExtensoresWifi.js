async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/products/getByCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                "category": "Extensores Wi-Fi"
            }),
        });

        const data = await response.json();
        console.log(data); 

        const container = document.querySelector('.product-container');
        container.innerHTML = ''; 
        
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <p><strong>${product.name}</strong>: ${product.description}</p>
            `;
            container.appendChild(productCard);
        });

    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

fetchProducts();
