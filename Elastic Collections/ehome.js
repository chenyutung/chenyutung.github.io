var images = [];

images[0] = ['photoFromInternet'];
images[1] = ['photoFromInternet2'];
images[2] = ['photoFromInternet3'];
var index = 0;

function change() {
  document.mainPhoto.src = images[index];
  if (index == 2) {
    index = 0;
  } else {
    index++;
  }

  setInterval(change(), 1000);
}

window.onload = change();