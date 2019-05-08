//money & clicks
var total = 0
var totalclicks = 0
var auto = 0
var a = 1

//spent
var totalwaifuspent = 0

//clicker Upgrades
var boostprice = 100

//auto Upgrades
var pillowcoverpris = 15
var coverpris = 15
var ownedcover = 0

var pillowpris = 100
var starpillowpris = 100
var ownedpillow = 0

var bodypillowpris = 1100
var startbodypillowpris = 1100
var ownedbodypillow = 0

//onetime upgardes
var upgradeoneköpt = 0

//onload
function onstartup() {
  //main click values
  document.getElementById("clicks").value = totalclicks + " Clicks";
  num = totalwaifuspent.toFixed(0);
  document.getElementById("spent").value = num + " Waifu's";

  //click upgrades
  document.getElementById("clickerboostprice").innerHTML = "Price: " + boostprice + " Waifu's";
  document.getElementById("boostinfo").innerHTML = "Next Click: " + a*2;

  //auto upgrades
  document.getElementById("pillowcoverprice").innerHTML = "Price: " + coverpris + " Waifu's";
  document.getElementById("coverinfo").innerHTML = "owned: " + ownedcover;

  document.getElementById("pillowprice").innerHTML = "Price: " + starpillowpris + " Waifu's";
  document.getElementById("pillowinfo").innerHTML = "owned: " + ownedpillow;

  document.getElementById("bodypillowprice").innerHTML = "Price: " + startbodypillowpris + " Waifu's";
  document.getElementById("bodypillowinfo").innerHTML = "owned: " + ownedbodypillow;
}

//add money system
function add() {
  var totalK
  var totalM
  var totalB
  var totalT
  var totalQa
  var totalQi
  var totalSx
  var totalSp
  var totalOc
  var totalNo
  var totalDc

  total = total + a
  totalclicks = totalclicks + 1
  money();

  document.getElementById("clicks").value = totalclicks + " Clicks";

  var waifu = document.getElementById("waifu");
  waifu.classList.remove('make-bigger');
  void waifu.offsetWidth;
  waifu.classList.add('make-bigger');
}

function money() {
  if (total < 1000) {
    num = total.toFixed(0)

    document.getElementById("score").value = num + " Waifu's";
  }

  else if (total >= 10**3 && total < 10**6) {
    num = total / 10**3
    totalK = num.toFixed(2)

    document.getElementById("score").value = totalK + "K" + " Waifu's";
  }

  else if (total >= 10**6 && total < 10**9) {
    num = total / 10**6
    totalM = num.toFixed(2)

    document.getElementById("score").value = totalM + "M" + " Waifu's";
  }

  else if (total >= 10**9 && total < 10**12) {
    num = total / 10**9
    totalB = num.toFixed(2)

    document.getElementById("score").value = totalB + "B" + " Waifu's";
  }

  else if (total >= 10**12 && total < 10**15) {
    num = total / 10**12
    totalT = num.toFixed(2)

    document.getElementById("score").value = totalT + "T" + " Waifu's";
  }

  else if (total >= 10**15 && total < 10**18) {
    num = total / 10**15
    totalQa = num.toFixed(2)

    document.getElementById("score").value = totalQa + "Qa" + " Waifu's";
  }

  else if (total >= 10**18 && total < 10**21) {
    num = total / 10**18
    totalQi = num.toFixed(2)

    document.getElementById("score").value = totalQi + "Qi" + " Waifu's";
  }

  else if (total >= 10**21 && total < 10**24) {
    num = total / 10**21
    totalSx = num.toFixed(2)

    document.getElementById("score").value = totalSx + "Sx" + " Waifu's";
  }

  else if (total >= 10**24 && total < 10**27) {
    num = total / 10**24
    totalSp = num.toFixed(2)

    document.getElementById("score").value = totalSp + "Sp" + " Waifu's";
  }

  else if (total >= 10**27 && total < 10**30) {
    numc = total / 10**27
    totalOc = num.toFixed(2)

    document.getElementById("score").value = totalOc + "Oc" + " Waifu's";
  }

  else if (total >= 10**30 && total < 10**33) {
    num = total / 10**30
    totalNo = num.toFixed(2)

    document.getElementById("score").value = totalNo + "No" + " Waifu's";
  }

  else if (total >= 10**33) {
    num = total / 10**33
    totalDc = num.toFixed(2)

    document.getElementById("score").value = totalDc + "Dc" + " Waifu's";
  }

  if (upgradeoneköpt == 0) {
    if (ownedcover >= 10) {
      document.getElementById("hide").style.display = "block";

      upgradeoneköpt = upgradeoneköpt + 1;
    }
  }
}

//update auto clickers
function update() {
  total += auto;

  money();
  test();

  setTimeout(update,1000);
}

//cicker upgrades
function clickerboost() {
  if (total >= boostprice) {
    total = total - boostprice;
    totalwaifuspent += boostprice;
    boostprice = boostprice * 15;
    a = a * 2;

    onstartup();
  }
}

function clickupgradeone() {
  var upgradeone = 5000;

  if (total >= upgradeone) {
    total = total - upgradeone;
    totalwaifuspent +=upgradeone;
    a = a + 3;

    document.getElementById("hide").style.display = "none";
    onstartup();
  }
}

//auto Upgrades
function pillowcover() {
  if (total >= pillowcoverpris) {
    total = total - pillowcoverpris;
    totalwaifuspent = totalwaifuspent + pillowcoverpris;
    ownedcover += 1;
    auto += 0.1;

    pillowcoverpris = 15 * 1.15**ownedcover;
    coverpris = pillowcoverpris.toFixed(0);

    money();
    onstartup();
  }
}

function autopillow() {
  if (total >= pillowpris) {
    total = total - pillowpris;
    totalwaifuspent = totalwaifuspent + pillowpris;
    ownedpillow += 1;
    auto += 1;

    pillowpris = 100 * 1.15**ownedpillow;
    startpillowpris = pillowpris.toFixed(0);

    money();
    onstartup();
  }
}

function bodypillow() {
  if (total >= bodypillowpris) {
    total -= bodypillowpris;
    totalwaifuspent += bodypillowpris;
    ownedbodypillow += 1;
    auto += 8;

    bodypillowpris = 1100 * 1.15**ownedbodypillow;
    startbodypillowpris = bodypillowpris.toFixed(0);

    money();
    onstartup();
  }
}

function test() {
  var not = document.getElementsByClassName("img");
  var not1 = -1
  var indexooo = "z-index"

  for (var i = 0; i < not.length; i++) {
    not[i].style.indexooo = not1;
    not1 -= 1
  }
}
