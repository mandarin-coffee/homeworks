const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        cartGood: [],
        filtered: [],
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(good) {
            console.log(this.cartGood)
            let find = this.cartGood.find(el => el.id === good.id);
            if(find){
                find.amount++;
            } else {
                const prod = Object.assign({amount: 1}, good);
                this.cartGood.push(prod)
            }
        },

        search(goods){
            let myInput = document.querySelector('.search > input').value;
            //let regexp = new RegExp(myInput, 'i');
            for(let good of goods){
                if(good.title === myInput){
                    let getSearch = document.querySelectorAll('.products > .item');
                    console.log(myInput);
                    for(let searchItem of getSearch){
                        if(searchItem.dataset['title'] !== myInput){
                            console.log(searchItem);
                            searchItem.classList.toggle('hide');
                        }
                    }
                }
            }
        },
        refresh(){
            let myInput = document.querySelectorAll('.products > .item');
            for(let searchItem of myInput){
                searchItem.classList.remove('hide');
            }
        },
    },
    computed: {},
    mounted() {
        this.getJson(`https://raw.githubusercontent.com/mandarin-coffee/json/master/getCart.json`)
            .then(data => {
                for (let item of data.contents){
                    this.$data.cartGood.push(item);
                }
            });
        this.getJson('https://raw.githubusercontent.com/mandarin-coffee/json/master/goods.json')
            .then(myJson => {
                for (let el of myJson) {
                    this.$data.goods.push(el);
                    this.$data.filtered.push(el);
                }
            });
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
