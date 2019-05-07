//money & clicks
var total = 0
var totalclicks = 0
var a = 10

//spent
var totalwaifuspent = 0

//clicker Upgrades
var boostprice = 100

//auto Upgrades
var pillowcoverpris = 15
var coverpris = 15
var autopillow = 0
var dps = 0

//onetime upgardes
var upgradeoneköpt = 0

//onload
function onstartup() {
  money();
  document.getElementById("clicks").value = totalclicks + " Clicks";
  num = totalwaifuspent.toFixed(0);
  document.getElementById("spent").value = num + " Waifu's";
  document.getElementById("clickerboostprice").innerHTML = "Price: " + boostprice + " Waifu's";
  document.getElementById("boostinfo").innerHTML = "Next Click: " + a*2;
  document.getElementById("pillowcoverprice").innerHTML = "Price: " + coverpris + " Waifu's";
  document.getElementById("coverinfo").innerHTML = "Owned: " + dps;
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
    if (total >= 1000) {
      document.getElementById("hide").style.display = "block";

      upgradeoneköpt = upgradeoneköpt + 1;
    }
  }
}

//update auto clickers  aldeles för mycket i sec
function update() {
  total += auto;

  onstartup();

  var t=setInterval(update,1000);
}

//cicker upgrades
function clickerboost() {
  if (total >= boostprice) {
    total = total - boostprice;
    totalwaifuspent = totalwaifuspent + boostprice;
    boostprice = boostprice * 15;
    a = a * 2;

    onstartup();
  }
}

function clickupgradeone() {
  var upgradeone = 5000;

  if (total >= upgradeone) {
    total = total - upgradeone;
    totalwaifuspent = totalwaifuspent + upgradeone;
    a = a + 3;

    document.getElementById("hide").style.display = "none";
    onstartup();
  }
}

//auto Upgrades
function pillowcover() {
  if (total >= pillowcoverpris) {
    total = total - pillowcoverpris;
    auto = autopillow + 0.1;
    totalwaifuspent = totalwaifuspent + pillowcoverpris;

    dps += 1;

    pillowcoverpris = pillowcoverpris * 1,15**dps;
    coverpris = pillowcoverpris.toFixed(0);

    update();
    onstartup();
  }
}
