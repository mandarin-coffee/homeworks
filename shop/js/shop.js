const products = [
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
                  <img src="`${img}`" alt="no img">
                </div>
                  <p class="title">${title}</p>
                  <p class="price">Цена: ${price} &#36;</p>
                <button class="btn">Купить</button>
            </div>`
};
let renderPage = list => {
    let productsList = list.map(item => renderProduct(item.title, item.price, item.img));
    //console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);
