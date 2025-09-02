var $img = document.getElementById("im");
var $width = window.innerWidth;
window.onresize = function () {
  var $width = window.innerWidth;
  if ($width <= 767) {
    $img.src = "./img/bg/bg-header-mobile.png";
  } else {
    $img.src = "./img/bg/bg-header-desktop.png";
  }
};

function chim() {
  if ($width <= 767) {
    $img.src = "./img/bg/bg-header-mobile.png";
  } else {
    $img.src = "./img/bg/bg-header-desktop.png";
  }
}
chim();
