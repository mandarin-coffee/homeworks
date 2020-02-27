window.onload = function() {
  var img = document.getElementsByTagName('img');
  for (var i = 0; i < img.length; i++) {
    img[i].onclick = showBigPictures;
  }
}

function showBigPictures(event){
  var bigPictures = document.querySelector('.bigPictures');
  bigPictures.innerHTML = '';
  var smallPictures = event.target;
  var imageNumberParts = smallPictures.id.split("_");
  var path = 'img/big/'+imageNumberParts[1]+'.jpg';
  var bigPicture = document.createElement('img');
  bigPicture.src = path;
  bigPictures.appendChild(bigPicture);
  bigPicture.onerror = function () {
    alert('file not found');
  }
}
