console.log("Hi, welcome to my portfolio website!")
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if ($(window).width() < 640 && x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
