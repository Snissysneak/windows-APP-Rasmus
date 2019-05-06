var total = 0
var a = 1

var totalwaifuspent = 0

//money system
function add() {
  total = total + a
    document.getElementById("score").value = total + " Waifu's";
    document.title = total + " Waifu's";

    var waifu = document.getElementById("waifu");

    waifu.classList.remove('make-bigger');

    void waifu.offsetWidth;

    waifu.classList.add('make-bigger');
}

function spent() {
  document.getElementById("spent").value = totalwaifuspent + " Waifu's"
}