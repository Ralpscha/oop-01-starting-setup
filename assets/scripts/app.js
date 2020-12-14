class Product  {
    title = 'DEFAULT';
    imageURL;
    price;
    description

    constructor(title, image, price, desc) {
        this.title = title;
        this.imageURL = image;
        this.price = price;
        this.description = desc;
    }
}

const productList = {
    products : [
        new Product('A first Pillow',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XKY5YexNWsWuomB9OBVxKNSmjip-g8gRc3BCLtss5R_Gqb8IO_Ve2pVrxX_nfAypIIUBCK8&usqp=CAc',
            9.99,
            'A first pillow'),

        new Product(
            'A Carpet',
            'https://d25tp5yt5ghnv4.cloudfront.net/image/desk_pdp_zoom/515242',
            200.91,
            "lekker warm tapijtje" ),

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