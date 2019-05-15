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

var pillowbankpris = 1400000
var startpillowbankpris = 1400000
var bankgive = 1
var bankgiveauto = 0
var ownedpillowbank = 0

var pillowtemplepris = 20000000
var startpillowtemplepris = 20000000
var templegive = 1
var templegiveauto = 0
var ownedpillowtemple = 0

var pillowtowerpris = 330000000
var startpillowtowerpris = 330000000
var towergive = 1
var towergiveauto = 0
var ownedpillowtower = 0

var pillowshipmentpris = 5100000000
var startpillowshipmentpris = 5100000000
var shipmentgive = 1
var shipmentgiveauto = 0
var ownedpillowshipment = 0

var pillowalchemylabpris = 75000000000
var startpillowalchemylabpris = 75000000000
var alchemylabgive = 1
var alchemylabgiveauto = 0
var ownedpillowalchemylab = 0

var pillowportalpris = 1000000000000
var startpillowportalpris = 1000000000000
var portalgive = 1
var portalgiveauto = 0
var ownedpillowportal = 0

var pillowtimepris = 14000000000000
var startpillowtimepris = 14000000000000
var timegive = 1
var timegiveauto = 0
var ownedpillowtime = 0

//onetime upgardes
var coverköptone = 0
var coverköpttwo = 0
var coverköptthree = 0

var pillowköptone = 0
var pillowköpttwo = 0
var pillowköptthree = 0

var bodypillowköptone = 0
var bodypillowköpttwo = 0
var bodypillowköptthree = 0

var mineköptone = 0
var mineköpttwo = 0
var mineköptthree = 0

var factoryköptone = 0
var factoryköpttwo = 0
var factoryköptthree = 0

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

  document.getElementById("pillowbankprice").innerHTML = "Price: " + startpillowbankpris + " Waifu's";
  document.getElementById("pillowbankinfo").innerHTML = "owned: " + ownedpillowbank;

  document.getElementById("pillowtempleprice").innerHTML = "Price: " + startpillowtemplepris + " Waifu's";
  document.getElementById("pillowtempleinfo").innerHTML = "owned: " + ownedpillowtemple;

  document.getElementById("pillowwizardtowerprice").innerHTML = "Price: " + startpillowtowerpris + " Waifu's";
  document.getElementById("pillowwizardtowerinfo").innerHTML = "owned: " + ownedpillowtower;

  document.getElementById("pillowshipmentprice").innerHTML = "Price: " + startpillowshipmentpris + " Waifu's";
  document.getElementById("pillowshipmentinfo").innerHTML = "owned: " + ownedpillowshipment;

  document.getElementById("pillowalchemylabprice").innerHTML = "Price: " + startpillowalchemylabpris + " Waifu's";
  document.getElementById("pillowalchemylabinfo").innerHTML = "owned: " + ownedpillowalchemylab;

  document.getElementById("pillowportalprice").innerHTML = "Price: " + startpillowportalpris + " Waifu's";
  document.getElementById("pillowportalinfo").innerHTML = "owned: " + ownedpillowportal;

  document.getElementById("pillowtimemachineprice").innerHTML = "Price: " + startpillowtimepris + " Waifu's";
  document.getElementById("pillowtimemachineinfo").innerHTML = "owned: " + ownedpillowtime;
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

  //one time bodypillow upgrades
  if (bodypillowköptone == 0) {
    if (ownedbodypillow >= 1) {
      document.getElementById("bodypillowupgradeone").style.display = "block";

      bodypillowköptone += 1;
    }
  }
  if (bodypillowköpttwo == 0) {
    if (ownedbodypillow >= 5) {
      document.getElementById("bodypillowupgradetwo").style.display = "block";

      bodypillowköpttwo += 1;
    }
  }
  if (bodypillowköptthree == 0) {
    if (ownedbodypillow >= 25) {
      document.getElementById("bodypillowupgradethree").style.display = "block";

      bodypillowköptthree += 1;
    }
  }

  //one time pillowmine upgrades
  if (mineköptone == 0) {
    if (ownedpillowmine >= 1) {
      document.getElementById("mineupgradeone").style.display = "block";

      mineköptone += 1;
    }
  }
  if (mineköpttwo == 0) {
    if (ownedpillowmine >= 5) {
      document.getElementById("mineupgradetwo").style.display = "block";

      mineköpttwo += 1;
    }
  }
  if (mineköptthree == 0) {
    if (ownedpillowmine >= 25) {
      document.getElementById("mineupgradethree").style.display = "block";

      mineköptthree += 1;
    }
  }

  //one time pillowfactory upgrades
  if (factoryköptone == 0) {
    if (ownedpillowfactory >= 1) {
      document.getElementById("factoryupgradeone").style.display = "block";

      factoryköptone += 1;
    }
  }
  if (factoryköpttwo == 0) {
    if (ownedpillowfactory >= 5) {
      document.getElementById("factoryupgradetwo").style.display = "block";

      factoryköpttwo += 1;
    }
  }
  if (factoryköptthree == 0) {
    if (ownedpillowfactory >= 25) {
      document.getElementById("factoryupgradethree").style.display = "block";

      factoryköptthree += 1;
    }
  }
}

//update auto clickers
function update() {
  total += covergiveauto + pillowgiveauto + bodypillowgiveauto + minegiveauto + factorygiveauto + bankgiveauto + templegiveauto + towergiveauto + shipmentgiveauto + alchemylabgiveauto + portalgiveauto + timegiveauto;

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

function bodypillowupgradeone() {
  var bodypillowupgradeone = 11000;

  if (total >= bodypillowupgradeone) {
    total -= bodypillowupgradeone;
    totalwaifuspent += bodypillowupgradeone;

    minegive = minegive * 2;

    document.getElementById("bodypillowupgradeone").style.display = "none";
    onstartup();
  }
}
function bodypillowupgradetwo() {
  var bodypillowupgradetwo = 55000;

  if (total >= bodypillowupgradetwo) {
    total -= bodypillowupgradetwo;
    totalwaifuspent += bodypillowupgradetwo;

    minegive = minegive * 2;

    document.getElementById("bodypillowupgradetwo").style.display = "none";
    onstartup();
  }
}
function bodypillowupgradethree() {
  var bodypillowupgradethree = 11000;

  if (total >= bodypillowupgradethree) {
    total -= bodypillowupgradethree;
    totalwaifuspent += bodypillowupgradethree;

    minegive = minegive * 2;

    document.getElementById("bodypillowupgradethree").style.display = "none";
    onstartup();
  }
}

function mineupgradeone() {
  var mineupgradeone = 120000;

  if (total >= mineupgradeone) {
    total -= mineupgradeone;
    totalwaifuspent += mineupgradeone;

    minegive = minegive * 2;

    document.getElementById("mineupgradeone").style.display = "none";
    onstartup();
  }
}
function mineupgradetwo() {
  var mineupgradetwo = 600000;

  if (total >= mineupgradetwo) {
    total -= mineupgradetwo;
    totalwaifuspent += mineupgradetwo;

    minegive = minegive * 2;

    document.getElementById("mineupgradetwo").style.display = "none";
    onstartup();
  }
}
function mineupgradethree() {
  var mineupgradethree = 6000000;

  if (total >= mineupgradethree) {
    total -= mineupgradethree;
    totalwaifuspent += mineupgradethree;

    minegive = minegive * 2;

    document.getElementById("mineupgradethree").style.display = "none";
    onstartup();
  }
}

function factoryupgradeone() {
  var factoryupgradeone = 1300000;

  if (total >= factoryupgradeone) {
    total -= factoryupgradeone;
    totalwaifuspent += factoryupgradeone;

    factorygive = factorygive * 2;

    document.getElementById("factoryupgradeone").style.display = "none";
    onstartup();
  }
}
function factoryupgradetwo() {
  var factoryupgradetwo = 6500000;

  if (total >= factoryupgradetwo) {
    total -= factoryupgradetwo;
    totalwaifuspent += factoryupgradetwo;

    factorygive = factorygive * 2;

    document.getElementById("factoryupgradetwo").style.display = "none";
    onstartup();
  }
}
function factoryupgradethree() {
  var factoryupgradethree = 65000000;

  if (total >= factoryupgradethree) {
    total -= factoryupgradethree;
    totalwaifuspent += factoryupgradethree;

    factorygive = factorygive * 2;

    document.getElementById("factoryupgradethree").style.display = "none";
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
    bodypillowgiveauto = (0.08 * ownedbodypillow) * bodypillowgive;

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

function pillowbank() {
  if (total >= pillowbankpris) {
    total -= pillowbankpris;
    totalwaifuspent += pillowbankpris;
    ownedpillowbank += 1;
    bankgiveauto = (14 * ownedpillowbank) * bankgive;

    pillowbankpris = 1400000 * 1.15**ownedpillowbank;
    startpillowbankpris = pillowbankpris.toFixed(0);

    money();
    onstartup();
  }
}

function pillowtemple() {
  if (total >= pillowtemplepris) {
    total -= pillowtemplepris;
    totalwaifuspent += pillowtemplepris;
    ownedpillowtemple += 1;
    templegiveauto = (78 * ownedpillowtemple) * templegive;

    pillowtemplepris = 20000000 * 1.15**ownedpillowtemple;
    startpillowtemplepris = pillowtemplepris.toFixed(0);

    money();
    onstartup();
  }
}

function pillowwizardtower() {
  if (total >= pillowtowerpris) {
    total -= pillowtowerpris;
    totalwaifuspent += pillowtowerpris;
    ownedpillowtower += 1;
    towergiveauto = (440 * ownedpillowtower) * towergive;

    pillowtowerpris = 330000000 * 1.15**ownedpillowtower;
    startpillowtowerpris = pillowtowerpris.toFixed(0);

    money();
    onstartup();
  }
}

function pillowshipment() {
  if (total >= pillowshipmentpris) {
    total -= pillowshipmentpris;
    totalwaifuspent += pillowshipmentpris;
    ownedpillowshipment += 1;
    shipmentgiveauto = (2600 * ownedpillowshipment) * shipmentgive;

    pillowshipmentpris = 5100000000 * 1.15**ownedpillowshipment;
    startpillowshipmentpris = pillowshipmentpris.toFixed(0);

    money();
    onstartup();
  }
}

function pillowalchemylab() {
  if (total >= pillowalchemylabpris) {
    total -= pillowalchemylabpris;
    totalwaifuspent += pillowalchemylabpris;
    ownedpillowalchemylab += 1;
    alchemylabgiveauto = (16000 * ownedpillowalchemylab) * alchemylabgive;

    pillowalchemylabpris = 75000000000 * 1.15**ownedpillowalchemylab;
    startpillowalchemylabpris = pillowalchemylabpris.toFixed(0);

    money();
    onstartup();
  }
}

function pillowportal() {
  if (total >= pillowportalpris) {
    total -= pillowportalpris;
    totalwaifuspent += pillowportalpris;
    ownedpillowportal += 1;
    portalgiveauto = (100000 * ownedpillowportal) * portalgive;

    pillowportalpris = 1000000000000 * 1.15**ownedpillowbank;
    startpillowportalpris = pillowportalpris.toFixed(0);

    money();
    onstartup();
  }
}

function pillowtimemachine() {
  if (total >= pillowtimepris) {
    total -= pillowtimepris;
    totalwaifuspent += pillowtimepris;
    ownedpillowtime += 1;
    timegiveauto = (600000 * ownedpillowtime) * timegive;

    pillowtimepris = 14000000000000 * 1.15**ownedpillowtime;
    startpillowtimepris = pillowtimepris.toFixed(0);

    money();
    onstartup();
  }
}

//test
