var img1 = document.querySelector('#img1');
var img2 = document.querySelector('#img2');
var img3 = document.querySelector('#img3');

img1.onclick = f;
img2.onclick = f;
img3.onclick = f;

function f(e) {
  switch (e.target) {
    case img1:
      document.querySelector('.big1').style.display = 'block';
      document.querySelector('.big2').style.display = 'none';
      document.querySelector('.big3').style.display = 'none';
      break;
    case img2:
      document.querySelector('.big1').style.display = 'none';
      document.querySelector('.big2').style.display = 'block';
      document.querySelector('.big3').style.display = 'none';
      break;
    case img3:
      document.querySelector('.big1').style.display = 'none';
      document.querySelector('.big2').style.display = 'none';
      document.querySelector('.big3').style.display = 'block';
      break;
    default:

  }
}
