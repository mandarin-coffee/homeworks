function f() {
  var chess = document.createElement('div');
  chess.className = 'chess';
  chess.id = 'chess';
  document.querySelector('body').prepend(chess);

  var chessTable = document.createElement("div");
  chessTable.className = 'chessTable';
  chessTable.id = 'chessTable';
  document.getElementById('chess').append(chessTable);

  for (var i = 0; i < 4; i++) {
    for (var c = 0; c < 8; c++) {
      var chessCell = document.createElement("div");
      chessCell.className = 'Cell';
      document.querySelector('.chessTable').append(chessCell);
    }
    for (var c = 0; c < 8; c++) {
      var chessCell2 = document.createElement("div");
      chessCell2.className = 'Cell2';
      document.querySelector('.chessTable').append(chessCell2);
    }
  }

  for (var i = 0; i < 8; i++) {
    var numbers = document.createElement('div');
    numbers.className = 'numbers';
    document.querySelector('.chess').append(numbers);
  }

  var num = document.querySelectorAll('.numbers');
  for (var i = 0; i < num.length; i++) {
    num[i].innerHTML += 1 + i;
  }

  for (var i = 0; i < 8; i++) {
    var numbers2 = document.createElement('div');
    numbers2.className = 'numbers2';
    document.querySelector('.chess').append(numbers2);
  }

  var num2 = document.querySelectorAll('.numbers2');
  for (var i = 0; i < num.length; i++) {
    num2[i].innerHTML += 1 + i;
  }

  var litters = document.createElement('div');
  litters.className = 'litters';
  document.querySelector('.chess').append(litters);

  for (var i = 0; i < 8; i++) {
    var lit = document.createElement('div');
    lit.className = 'lit';
    document.querySelector('.litters').append(lit);
  }

  var litEn = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  lit = document.querySelectorAll('.lit');
  for (var i = 0; i < lit.length; i++) {
    lit[i].innerHTML += litEn[i];
  }

  var litters2 = document.createElement('div');
  litters2.className = 'litters2';
  document.querySelector('.chess').append(litters2);

  for (var i = 0; i < 8; i++) {
    var lit2 = document.createElement('div');
    lit2.className = 'lit2';
    document.querySelector('.litters2').append(lit2);
  }

  lit2 = document.querySelectorAll('.lit2');
  for (var i = 0; i < lit2.length; i++) {
    lit2[i].innerHTML += litEn[i];
  }
}
