var exit = document.getElementById('exit');

var total = 0
var totalclicks = 0
var a = 1

var totalwaifuspent = 0

//exit system
function exit() {
  exit.addEventListener('click', function() {
    window.close();
  });
}

//money system
function add() {
  total = total + a
  totalclicks = totalclicks + 1
  document.getElementById("score").value = total + " Waifu's";
  document.getElementById("clicks").value = totalclicks + " Clicks";
  document.title = total + " Waifu's";

  var waifu = document.getElementById("waifu");

  waifu.classList.remove('make-bigger');

  void waifu.offsetWidth;

  waifu.classList.add('make-bigger');
}

function spent() {
  document.getElementById("spent").value = totalwaifuspent + " Waifu's"
}
