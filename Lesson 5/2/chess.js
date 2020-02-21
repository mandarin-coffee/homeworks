function createTableChess() {
  var littersEn = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  var chessCreate = document.createElement('div');
  chessCreate.className = 'chess';
  document.body.prepend(chessCreate);

  for (var i = 0; i < 4; i++) {
    var string = document.createElement('div');
    string.className = 'string';
    document.querySelector('.chess').append(string);

    var string2 = document.createElement('div');
    string2.className = 'string2';
    document.querySelector('.chess').append(string2);

    for (var c = 0; c < 8; c++) {
      var cell = document.createElement('div');
      cell.className = 'cell';
      document.querySelectorAll('.string')[i].appendChild(cell);
    }

    for (var c = 0; c < 8; c++) {
      var cell2 = document.createElement('div');
      cell2.className = 'cell2';
      document.querySelectorAll('.string2')[i].appendChild(cell2);
    }
  }
  for (var i = 0; i < 8; i++) {
    var chessNumbers = document.createElement('div');
    chessNumbers.className = 'numbers';
    document.querySelector('.chess').append(chessNumbers);
  }
  var numberCell = document.querySelectorAll('.numbers');
  for (var i = 0; i < 8; i++) {
    numberCell[i].innerHTML += 8 - i;
  }

  for (var i = 0; i < 8; i++) {
    var chessNumbers2 = document.createElement('div');
    chessNumbers2.className = 'numbers2';
    document.querySelector('.chess').append(chessNumbers2);
  }
  numberCell = document.querySelectorAll('.numbers2');
  for (var i = 0; i < 8; i++) {
    numberCell[i].innerHTML += 8 - i;
  }

  var litters = document.createElement('div');
  litters.className = 'litters';
  document.querySelector('.chess').append(litters);

  for (var c = 0; c < 8; c++) {
    var lit = document.createElement('div');
    lit.className = 'lit';
    document.querySelector('.litters').append(lit);
  }

  var checkLit = document.querySelectorAll('.lit');
  for (var i = 0; i < checkLit.length; i++) {
    checkLit[i].innerHTML += littersEn[i];
  }

  var litters2 = document.createElement('div');
  litters2.className = 'litters2';
  document.querySelector('.chess').append(litters2);

  for (var c = 0; c < 8; c++) {
    var lit2 = document.createElement('div');
    lit2.className = 'lit2';
    document.querySelector('.litters2').append(lit2);
  }

  checkLit = document.querySelectorAll('.lit2');
  for (var i = 0; i < checkLit.length; i++) {
    checkLit[i].innerHTML += littersEn[i];
  }

  var added = document.querySelectorAll('.cell2');
  for (var i = 0; i < 8; i++) {
    added[i].innerHTML += "&#9823;";
  }

  added = document.querySelectorAll('.string')[3].querySelectorAll('.cell');
  for (var i = 0; i < 8; i++) {
    added[i].innerHTML += "&#9817;";
  }

  added = document.querySelectorAll('.string')[0].querySelectorAll('.cell');
  added[0].innerHTML += "&#9820;";
  added[7].innerHTML += "&#9820;";
  added[1].innerHTML += "&#9822;";
  added[6].innerHTML += "&#9822;";
  added[2].innerHTML += "&#9821;";
  added[5].innerHTML += "&#9821;";
  added[3].innerHTML += "&#9819;";
  added[4].innerHTML += "&#9818;";

  added = document.querySelectorAll('.string2')[3].querySelectorAll('.cell2');
  added[0].innerHTML += "&#9814;";
  added[7].innerHTML += "&#9814;";
  added[1].innerHTML += "&#9816;";
  added[6].innerHTML += "&#9816;";
  added[2].innerHTML += "&#9815;";
  added[5].innerHTML += "&#9815;";
  added[3].innerHTML += "&#9813;";
  added[4].innerHTML += "&#9812;";
}
