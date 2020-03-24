Vue.component('search', {
    props: ['goods'],
    template: `<div class="search">
                    <i class="fas fa-sync-alt"
                        data-name="Сбросить фильтр"
                        @click="$parent.$emit(refresh)" alt="Сбросить фильтр"></i>
                    <input type="text" placeholder="Search">
                    <i class="fas fa-search" @click="$parent.$emit('search', goods)"></i>
                </div>`
})