var item1 = {
  name: 'Куркта',
  price: 7000
};
var item2 = {
  name: 'Шапка',
  price: 688
};
var item3 = {
  name: 'Кофта',
  price: 1790
};
var item4 = {
  name: 'Штаны',
  price: 1785
};
var item5 = {
  name: 'Обувь',
  price: 9900
};
var item6 = {
  name: 'Шарф',
  price: 500
};

var goods = [item1, item2, item3, item4, item5, item6];

var i, good, p1, p2, btn;
for (i = 0; i < goods.length; i++) {
  good = document.createElement('div');
  good.className = 'good';
  document.querySelector('.goods').append(good);

  for (var c = 0; c < 1; c++) {
    p1 = document.createElement('p');
    p1.className = 'p1';
    p1.innerHTML += goods[i].name;
    document.querySelectorAll('.good')[i].appendChild(p1);
  }
  for (var c = 0; c < 1; c++) {
    p2 = document.createElement('p');
    p2.className = 'p2';
    p2.innerHTML += goods[i].price + ' &#8381;';
    document.querySelectorAll('.good')[i].appendChild(p2);
  }
  for (var c = 0; c < 1; c++) {
    btn = document.createElement('button');
    btn.id = 'btn' + (1 + i);
    btn.innerText += 'Купить'
    document.querySelectorAll('.good')[i].appendChild(btn);
  }
}

var btns = document.querySelectorAll('.goods .good button');
var sum = 0;
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    var items = document.createElement('div');
    items.className = 'items';
    document.querySelector('.cart').prepend(items);
    var itemName = document.createElement('p');
    itemName.className = 'itemName';
    document.querySelector('.items').append(itemName);
    itemName.innerHTML += goods[i].name;
    var itemPrice = document.createElement('p');
    itemPrice.className = 'itemPrice';
    document.querySelector('.items').append(itemPrice);
    itemPrice.innerHTML += goods[i].price + ' &#8381;';

    sum += goods[i].price;
    document.querySelector('.sum').innerHTML = sum + ' &#8381;';
  }
}
