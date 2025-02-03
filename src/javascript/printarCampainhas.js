async function fetchProducts() {
    try {
        const response = await fetch('https://sa-intelbras-back-3.onrender.com/products/getByCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                "category": "Campainha"
            }),
        });

        const data = await response.json();
        console.log(data); // Log the fetched data

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
