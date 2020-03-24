Vue.component('goods', {
    props: ['goods'],
    template: `<div class="products">
                <product v-for="good of goods" 
                :key="good.id"
                :product="good"></product>
               </div>`
});
Vue.component('product', {
    props: ['product'],
    template: `
            <div class="item" :data-title="product.title">
                <img src="img/picNoImg.jpg" alt="">
                <div class="title">{{product.title}}</div>
                <div class="price">{{product.price}} &#36;</div>
                <button class="buy-btn"
                        @click="$parent.$emit('add-product', product)">Купить</button>
            </div>
    `
})