/*const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'img/picNoImg.jpg'},
    {id: 2, title: 'Mouse', price: 20, img: 'img/picNoImg.jpg'},
    {id: 3, title: 'Keyboard', price: 200, img: 'img/picNoImg.jpg'},
    {id: 4, title: 'Gamepad', price: 50, img: 'img/picNoImg.jpg'},
    {id: 5, title: 'Phone', price: 100, img: 'img/picNoImg.jpg'},
    {id: 6, title: 'Monitor', price: 90, img: 'img/picNoImg.jpg'},
];
const renderProduct = (title, price, img) => {
    return `<div class="item">
                <div class="picture">
                  <img src="${img}" alt="no img">
                </div>
                  <p class="title">${title}</p>
                  <p class="price">Цена: ${price} &#36;</p>
                <button class="btn">Купить</button>
            </div>`
};
let renderPage = list => {
    let productsList = list.map(item => renderProduct(item.title, item.price, item.img)).join("");
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);*/

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allGoods = [];
        this._fetchProducts();
    }

    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, img: 'img/picNoImg.jpg'},
            {id: 2, title: 'Mouse', price: 20, img: 'img/picNoImg.jpg'},
            {id: 3, title: 'Keyboard', price: 200, img: 'img/picNoImg.jpg'},
            {id: 4, title: 'Gamepad', price: 50, img: 'img/picNoImg.jpg'},
            {id: 5, title: 'Phone', price: 100, img: 'img/picNoImg.jpg'},
            {id: 6, title: 'Monitor', price: 90, img: 'img/picNoImg.jpg'},
        ];
    }

    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allGoods.push(productObj);
            //block.innerHTML += productObj.render();
            block.insertAdjacentHTML("beforeend", productObj.render());
        }

        //Второе задание
        console.log(this.allGoods[0].price);
        let sum = 0;
        for(let i=0; i< this.allGoods.length; i++){
            sum += this.allGoods[i].price;
        }

        document.querySelector('main').insertAdjacentHTML("beforebegin", `Сумма всех товаров ${sum}`);

    }
}

class ProductItem{
    constructor(product){
        this.title = product.title;
        this.price = product.price;
        this.img = product.img;
        this.id = product.id;
    }

    render(){//верстка для 1 товара
        return `<div class="item">
                <div class="picture">
                  <img src="${this.img}" alt="no img">
                </div>
                  <p class="title">${this.title}</p>
                  <p class="price">Цена: ${this.price} &#36;</p>
                <button class="btn">Купить</button>
            </div>`
    }
}
//Первое задание
class Cart{
    constructor(cart) {
        this.removeProduct = [];
        this.chekout = [];
    }
}

let list = new ProductList()
list.render();
