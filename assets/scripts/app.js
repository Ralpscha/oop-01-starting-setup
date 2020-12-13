const productList = {
    products : [
        {
            title: 'A Pillow',
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUJvt5uS6aJKfUwYz3nq8sVZh0N-2xh4jlb6xEWUdNCk2818k4Bj_wCgf7ls&usqp=CAc',
            price: 19.99,
            description: 'A soft pillow'
        },
        {
            title: 'A Carpet',
            imageURL: 'data:image/jpeg;base64,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',
            price: 221.78,
            description: 'A warm carpet'
        }
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src = "${prod.imageURL}" alt="${prod.title}">
                <div class="product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to Cart</button>          
                </div>
            </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();