<div class="headerWrap">
    <div class="headerContainer">
        <h1><a href="index.php">V-shop</a></h1>
        <nav>
            <ul>
                <li><a href="#">Каталог</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">О нас</a></li>
            </ul>
        </nav>
        <div class="searchAndCart">
            <div class="search">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search">
            </div>
            <div class="cart">
                <button @click="showCart = !showCart"><i class="fas fa-shopping-basket"></i></button>
                <div class="cartShow" v-show="showCart">
                    {{msgCart}}
                    <div class="cartWrapper">
                        <div class="cart hide">
                            <div class="cartCol">
                                <p>Имя</p>
                                <p>Цена</p>
                                <p>Количество</p>
                            </div>
                            <hr>
                            <cart :cart-good="cartGood"></cart>
                            <hr>
                            <div class="total">
                                <p>Итого:</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>