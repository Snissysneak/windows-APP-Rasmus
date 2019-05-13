//money & clicks
var total = 0
var totalclicks = 0
var auto = 0
var a = 1000

//spent
var totalwaifuspent = 0

//clicker Upgrades
var boostprice = 100

//auto Upgrades
var pillowcoverpris = 15
var coverpris = 15
var covergive = 1
var covergiveauto = 0
var ownedcover = 0

var pillowpris = 100
var startpillowpris = 100
var pillowgive = 1
var pillowgiveauto = 0
var ownedpillow = 0

var bodypillowpris = 1100
var startbodypillowpris = 1100
var bodypillowgive = 1
var bodypillowgiveauto = 0
var ownedbodypillow = 0

var pillowminepris = 12000
var startpillowminepris = 12000
var minegive = 1
var minegiveauto = 0
var ownedpillowmine = 0

var pillowfactorypris = 130000
var startpillowfactorypris = 130000
var factorygive = 1
var factorygiveauto = 0
var ownedpillowfactory = 0

//onetime upgardes
var coverköptone = 0
var coverköpttwo = 0
var coverköptthree = 0

var pillowköptone = 0
var pillowköpttwo = 0
var pillowköptthree = 0

//onload
function onstartup() {
  //main click values
  document.getElementById("clicks").value = totalclicks + " Clicks";
  num = totalwaifuspent.toFixed(0);
  document.getElementById("spent").value = num + " Waifu's";

  //auto upgrades
  document.getElementById("pillowcoverprice").innerHTML = "Price: " + coverpris + " Waifu's";
  document.getElementById("coverinfo").innerHTML = "owned: " + ownedcover;

  document.getElementById("pillowprice").innerHTML = "Price: " + startpillowpris + " Waifu's";
  document.getElementById("pillowinfo").innerHTML = "owned: " + ownedpillow;

  document.getElementById("bodypillowprice").innerHTML = "Price: " + startbodypillowpris + " Waifu's";
  document.getElementById("bodypillowinfo").innerHTML = "owned: " + ownedbodypillow;

  document.getElementById("pillowmineprice").innerHTML = "Price: " + startpillowminepris + " Waifu's";
  document.getElementById("pillowmineinfo").innerHTML = "owned: " + ownedpillowmine;

  document.getElementById("pillowfactoryprice").innerHTML = "Price: " + startpillowfactorypris + " Waifu's";
  document.getElementById("pillowfactoryinfo").innerHTML = "owned: " + ownedpillowfactory;
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

  //onetime cover upgrades
  if (coverköptone == 0) {
    if (ownedcover >= 1) {
      document.getElementById("coverupgradeone").style.display = "block";

      coverköptone += 1;
    }
  }
  if (coverköpttwo == 0) {
    if (ownedcover >= 1) {
      document.getElementById("coverupgradetwo").style.display = "block";

      coverköpttwo += 1
    }
  }
  if (coverköptthree == 0) {
    if (ownedcover >= 10) {
      document.getElementById("coverupgradethree").style.display = "block";

      coverköptthree += 1
    }
  }

  //one time pillow upgrades
  if (pillowköptone == 0) {
    if (ownedpillow >= 1) {
      document.getElementById("pillowupgradeone").style.display = "block";

      pillowköptone += 1;
    }
  }
  if (pillowköpttwo == 0) {
    if (ownedpillow >= 5) {
      document.getElementById("pillowupgradetwo").style.display = "block";

      pillowköpttwo += 1
    }
  }
  if (pillowköptthree == 0) {
    if (ownedpillow >= 25) {
      document.getElementById("pillowupgradethree").style.display = "block";

      pillowköptthree += 1
    }
  }


}

//update auto clickers
function update() {
  total += covergiveauto + pillowgiveauto + bodypillowgiveauto + minegiveauto + factorygiveauto;

  money();

  setTimeout(update,10);
}

//cicker upgrades

function coverupgradeone() {
  var coverupgradeone = 100;

  if (total >= coverupgradeone) {
    total = total - coverupgradeone;
    totalwaifuspent +=coverupgradeone;
    a = a * 2;
    covergive = covergive * 2;

    document.getElementById("coverupgradeone").style.display = "none";
    onstartup();
  }
}
function coverupgradetwo() {
  var coverupgradetwo = 500;

  if (total >= coverupgradetwo) {
    total = total - coverupgradetwo;
    totalwaifuspent += coverupgradetwo;
    a = a * 2;
    covergive = covergive * 2;

    document.getElementById("coverupgradetwo").style.display = "none";
    onstartup();
  }
}
function coverupgradethree() {
  var coverupgradethree = 10000;

  if (total >= coverupgradethree) {
    total = total - coverupgradethree;
    totalwaifuspent +=coverupgradethree;
    a = a * 2;
    covergive = covergive * 2;

    document.getElementById("coverupgradethree").style.display = "none";
    onstartup();
  }
}

function pillowupgradeone() {
  var pillowupgradeone = 1000;

  if (total >= pillowupgradeone) {
    total -= pillowupgradeone;
    totalwaifuspent += pillowupgradeone;

    pillowgive = pillowgive * 2;

    document.getElementById("pillowupgradeone").style.display = "none";
    onstartup();
  }
}
function pillowupgradetwo() {
  var pillowupgradetwo = 5000;

  if (total >= pillowupgradetwo) {
    total -= pillowupgradetwo;
    totalwaifuspent += pillowupgradetwo;

    pillowgive = pillowgive * 2;

    document.getElementById("pillowupgradetwo").style.display = "none";
    onstartup();
  }
}
function pillowupgradethree() {
  var pillowupgradethree = 50000;

  if (total >= pillowupgradethree) {
    total -= pillowupgradethree;
    totalwaifuspent += pillowupgradethree;

    pillowgive = pillowgive * 2;

    document.getElementById("pillowupgradethree").style.display = "none";
    onstartup();
  }
}

//auto Upgrades
function pillowcover() {
  if (total >= pillowcoverpris) {
    total = total - pillowcoverpris;
    totalwaifuspent = totalwaifuspent + pillowcoverpris;
    ownedcover += 1;
    covergiveauto = (0.001 * ownedcover) * covergive;

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
    pillowgiveauto = (0.01 * ownedpillow) * pillowgive;

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
    bodypillowgiveauto = (0.08 * ownedcover) * bodypillowgive;

    bodypillowpris = 1100 * 1.15**ownedbodypillow;
    startbodypillowpris = bodypillowpris.toFixed(0);

    money();
    onstartup();
  }
}

function pillowmine() {
  if (total >= pillowminepris) {
    total -= pillowminepris;
    totalwaifuspent += pillowminepris;
    ownedpillowmine += 1;
    minegiveauto = (0.47 * ownedpillowmine) * minegive;

    bodypillowpris = 12000 * 1.15**ownedpillowmine;
    startpillowminepris = bodypillowpris.toFixed(0);

    money();
    onstartup();
  }
}

function pillowfactory() {
  if (total >= pillowfactorypris) {
    total -= pillowfactorypris;
    totalwaifuspent += pillowfactorypris;
    ownedpillowfactory += 1;
    factorygiveauto = (2.6 * ownedpillowfactory) * factorygive;

    pillowfactorypris = 130000 * 1.15**ownedpillowfactory;
    startpillowfactorypris = pillowfactorypris.toFixed(0);

    money();
    onstartup();
  }
}

//test
