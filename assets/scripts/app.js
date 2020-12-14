class Product  {
    //productattributen hoeven hier niet gedeclareerd te worden. Dat doet de constructor wel.

    constructor(title, image, price, desc) {
        this.title = title;
        this.imageURL = image;
        this.price = price;
        this.description = desc;
    }
}

class ProductList {
    products = [
        new Product('A first Pillow',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XKY5YexNWsWuomB9OBVxKNSmjip-g8gRc3BCLtss5R_Gqb8IO_Ve2pVrxX_nfAypIIUBCK8&usqp=CAc',
            9.99,
            'A first pillow'),

        new Product(
            'A Carpet',
            'https://d25tp5yt5ghnv4.cloudfront.net/image/desk_pdp_zoom/515242',
            200.91,
            "lekker warm tapijtje" ),

    ];

    constructor() {}

    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        console.log('Adding product to cart');
        console.log(this.product);
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
            <div>
                <img src = "${this.product.imageURL}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>          
                </div>
            </div>
            `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
        return prodEl;
    }
}


const productList = new ProductList();
productList.render();