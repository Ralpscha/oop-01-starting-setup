class Product  {
    //productattributen hoeven hier niet gedeclareerd te worden. Dat doet de constructor wel.

    constructor(title, image, price, desc) {
        this.title = title;
        this.imageURL = image;
        this.price = price;
        this.description = desc;
    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId;
    }

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if(cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value)
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}


class ShoppingCart extends Component {
    items = [];

    //setter schijnt optioneel te zijn.
    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce(
            (prevValue, curItem) => prevValue + curItem.price, 0);
        return sum;
    }

    constructor(renderHookId) {
        super(renderHookId);
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;

        }

    render() {
        const cartEl = this.createRootElement('section','cart',);
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        this.totalOutput = cartEl.querySelector('h2');
        }
}

class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId);
        this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }

    render() {
        const prodEl = this.createRootElement('li', 'product-item')
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
    }
}

class ProductList extends Component {
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

    constructor(renderHookId) {
        super(renderHookId);
    }

    render() {
        this.createRootElement('ul', 'product-list',
            [new ElementAttribute('id', 'prod-list')]);
        for (const prod of this.products) {
            const productItem = new ProductItem(prod, 'prod-list');
            productItem.render();
            }
    }
}

class Shop {
    render() {
        this.cart = new ShoppingCart('app');
        this.cart.render();
        const productList = new ProductList('app');
        productList.render();
    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();