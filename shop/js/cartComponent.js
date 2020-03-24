Vue.component('cart', {
    props: ['cartGood'],
    template: `<div class="cartItem" >
                <good v-for="item of cartGood"
                      :key="item.id"
                      :good="item"></good> 
               </div>`
});
Vue.component('good',{
    props: ['good'],
    template: `<div class="item">
                <img src="img/picNoImg.jpg" alt="">
                <p class="title">{{good.title}}</p>
                <p class="quantity">{{good.amount}}</p>
                <p class="price">{{good.price * good.amount}} &#36;</p>
               </div>`
})