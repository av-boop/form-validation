function validation() {
  var n = document.getElementById("name");
  var p = document.getElementById("phone-number");
  var t = document.getElementById("time");
  var f = document.getElementById("food");
  var e = document.getElementById("eemail");

  if (n.value.trim() == "") {
    n.style.borderBottom = "1px solid red";
    document.getElementById("name-label").style.visibility = "visible";
    document.getElementById("mark").style.visibility = "visible";
    return false;
  }

  if (p.value.trim() == "") {
    p.style.borderBottom = "1px solid red";
    document.getElementById("phone-label").style.visibility = "visible";
    document.getElementById("mark2").style.visibility = "visible";
    return false;
  }

  if (p.value.length != 10) {
    p.style.borderBottom = "1px solid red";
    document.getElementById("phone-label").style.visibility = "visible";
    document.getElementById("phone-label").innerHTML =
      "Phone number must be of 10 digits";
    document.getElementById("mark2").style.visibility = "visible";
    return false;
  }

  if (t.value.trim() == "") {
    t.style.borderBottom = "1px solid red";
    document.getElementById("time-label").style.visibility = "visible";
    document.getElementById("mark3").style.visibility = "visible";

    return false;
  }

  if (f.value.trim() == "") {
    f.style.borderBottom = "1px solid red";
    document.getElementById("food-label").style.visibility = "visible";
    document.getElementById("mark4").style.visibility = "visible";

    return false;
  }

  if (e.value.trim() == "") {
    e.style.borderBottom = "1px solid red";
    document.getElementById("email-label").style.visibility = "visible";
    document.getElementById("mark5").style.visibility = "visible";

    return false;
  }
}

function i() {
  document.getElementById("name").style.borderBottom = "1px solid green";
  document.getElementById("name-label").style.visibility = "hidden";
  document.getElementById("mark").style.visibility = "hidden";
}

function i2() {
  document.getElementById("phone-number").style.borderBottom =
    "1px solid green";
  document.getElementById("phone-label").style.visibility = "hidden";
  document.getElementById("mark2").style.visibility = "hidden";
}

function i3() {
  document.getElementById("time").style.borderBottom = "1px solid green";
  document.getElementById("time-label").style.visibility = "hidden";
  document.getElementById("mark3").style.visibility = "hidden";
}

function i4() {
  document.getElementById("food").style.borderBottom = "1px solid green";
  document.getElementById("food-label").style.visibility = "hidden";
  document.getElementById("mark4").style.visibility = "hidden";
}

function i5() {
  document.getElementById("eemail").style.borderBottom = "1px solid green";
  document.getElementById("email-label").style.visibility = "hidden";
  document.getElementById("mark5").style.visibility = "hidden";
}
