const app = new Vue({
    el: '#app',
    data: {
        //catalogUrl: '/catalogData.json',
        products: [],
        cartGood: [],
        //imgCatalog: 'img/picNoImg.jpg'
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            let cartItem = document.querySelector('.cartItem ');
            let addedProduct = `<div class="item" data-id="${product.id}"><img src="img/picNoImg.jpg" alt="">
                                <p>${product.title}</p>
                                <p>${product.price * product.quantity} &#36;</p>
                                <p>${product.quantity}</p></div>`;
            cartItem.insertAdjacentHTML('beforeend', addedProduct);


            console.log(product.id);
        },
    },
    mounted() {
        this.getJson('https://raw.githubusercontent.com/mandarin-coffee/json/master/goods.json')
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
        // this.getJson(`getProducts.json`)
        //     .then(data => {
        //         for(let el of data){
        //             this.products.push(el);
        //         }
        //     })
    }
});


// class Shop {
//     constructor(container = '.products') {
//         this.container = container;
//         this.goods = []; //не понятно зачем этот массив нужен
//         this.arrObj = []; // массив товаров
//         this.getProducts()
//             .then(mambl => {
//                 this.goods = [...mambl];
//                 this.render()
//             });
//     }
//
//     getProducts(){
//         return fetch('https://raw.githubusercontent.com/mandarin-coffee/json/master/goods.json')
//             .then(reason => reason.json())
//             .catch(error => console.log(error));
//     }
//
//     render(){
//         let good = document.querySelector(this.container);
//         for (let product of this.goods){
//             let goodObj = new ShopItem(product);
//             this.arrObj.push(goodObj);
//             good.insertAdjacentHTML('beforeend', goodObj.addHtml());
//         }
//     }
// }
//
// class ShopItem{
//     constructor(itemOfGoods) {
//         this.title = itemOfGoods.title;
//         this.price = itemOfGoods.price;
//         this.quantity = itemOfGoods.quantity;
//         this.id = itemOfGoods.id;
//     }
//
//     addHtml(){
//         return `<div class="item">
//                     <img src="img/picNoImg.jpg" alt="">
//                     <div class="title">${this.title}</div>
//                     <div class="price">${this.price} &#36;</div>
//                     <button>Купить</button>
//                 </div>`
//     }
// }
//
// let listOfGoods = new Shop;
// listOfGoods.render();
//
// class Cart {
//     constructor() {
//         this.addToCart = [];
//     }
//     getButton(){
//         let timeout = setTimeout( ()=>{
//             this.addToCart = document.querySelectorAll('.products > .item > button');
//             console.log(this.addToCart);
//         }, 100)
//     }
// }
//
// class CartItem{
//     constructor(item) {
//         this.title = item.title;
//         this.price = item.price;
//         this.quantity = item.quantity;
//     }
//
//     addHtml(){
//         return `<div class="item">
//                     <img src="img/picNoImg.jpg" alt="">
//                     <p>${this.title}</p>
//                     <p>${this.price}</p>
//                     <p>${this.quantity}</p>
//                  </div>`
//     }
// }
//
// let test = new Cart;
// test.getButton();
//
