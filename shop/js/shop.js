const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = []; //массив товаров
        this.allGoods = []; // массив объектов
        //this._fetchProducts();
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }

    // _fetchProducts() {
    //     this.goods = [
    //         {id: 1, title: 'Notebook', price: 2000, img: 'img/picNoImg.jpg'},
    //         {id: 2, title: 'Mouse', price: 20, img: 'img/picNoImg.jpg'},
    //         {id: 3, title: 'Keyboard', price: 200, img: 'img/picNoImg.jpg'},
    //         {id: 4, title: 'Gamepad', price: 50, img: 'img/picNoImg.jpg'},
    //         {id: 5, title: 'Phone', price: 100, img: 'img/picNoImg.jpg'},
    //         {id: 6, title: 'Monitor', price: 90, img: 'img/picNoImg.jpg'},
    //     ];
    // }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allGoods.push(productObj);
            //block.innerHTML += productObj.render();
            block.insertAdjacentHTML("beforeend", productObj.render());
        }
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.product_name;
        this.price = product.price;
        this.img = product.img;
        this.id = product.id;
    }

    render() {//верстка для 1 товара
        return `<div class="item">
                <div class="picture">
                  <img src="img/picNoImg.jpg" alt="no img">
                </div>
                  <p class="title">${this.title}</p>
                  <p class="price">Цена: ${this.price} &#36;</p>
                <button class="btn">Купить</button>
            </div>`
    }
}

let cartIcon = document.querySelector('.cartIcon').addEventListener('click', () => {
   let cartShow = document.querySelector('.showCart');
    cartShow.classList.toggle('hide');
});

class Cart {
    constructor(cart) {
        this.removeProduct = [];
        this.chekout = [];
    }
}

let list = new ProductList();
list.render();
