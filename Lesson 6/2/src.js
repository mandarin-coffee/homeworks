var goods = ['Куртка', 'Шапка', 'Кофта', 'Штаны', 'Обувь', 'Шарф'];
var price = [7000, 688, 1790, 1785, 9900, 500];

for (var i = 0; i < goods.length; i++) {
  var good = document.createElement('div');
  good.className = 'good';
  document.querySelector('.goods').append(good);

  for (var c = 0; c < 1; c++) {
    var nameList = document.createElement('p');
    nameList.className = 'name';
    document.querySelectorAll('.good')[i].appendChild(nameList);
  }

  for (var c = 0; c < 1; c++) {
    var priceList = document.createElement('p');
    priceList.className = 'price';
    document.querySelectorAll('.good')[i].appendChild(priceList);
  }
  for (var c = 0; c < 1; c++) {
    var btn = document.createElement('button');
    btn.className = 'price';
    btn.id = 'btn' + (1 + i);
    btn.innerText += 'Купить'
    document.querySelectorAll('.good')[i].appendChild(btn);
  }
}

for (var i = 0; i < goods.length; i++) {
  var goodName = document.querySelectorAll('.good')[i].querySelector('.name');
  goodName.innerHTML += goods[i];
}

for (var i = 0; i < price.length; i++) {
  var priceName = document.querySelectorAll('.good')[i].querySelector('.price');
  priceName.innerHTML += price[i];
}

var btns = document.querySelectorAll('.goods .good button');
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    var items = document.createElement('div');
    items.className = 'items';
    document.querySelector('.basket').prepend(items);
    var itemName = document.createElement('p');
    itemName.className = 'itemName';
    document.querySelector('.items').append(itemName);
  }
}
