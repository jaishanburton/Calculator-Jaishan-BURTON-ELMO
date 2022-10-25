function set(op) {
    document.getElementById("display").value += op;
}

function sqrRoot() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sqrt(tempStore));

}

function ln() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.log(tempStore));

}

function tan() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.tan(tempStore));

}

function cos() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.cos(tempStore));

}

function sin() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sin(tempStore));

}

function setOp() {
    alert("gf");
}

function answer() {
  if ((display.value).indexOf("^") > -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponent = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value)
  }
}

function ac() {

    var elem = document.getElementById("display").value;
    var length = elem.length;
    length=0;
    var a = elem.substr(0, length);
    document.getElementById("display").value = a;
}

function factorial() {
    var number = 1;
    if (display.value === 0) {
      display.value = "1";
    } else if (display.value < 0) {
      display.value = "undefined";
    } else {
      var number = 1;
      for (var i = display.value; i > 0; i--) {
        number *=  i;
      }
      display.value = number;
    }
  }

  function square() {
    display.value = eval(display.value * display.value);
  }

    function exponent() {
      display.value += "^";
    }  

  function percent() {
    display.value = display.value / 100;
  }

  function log() {
    display.value = Math.log10(display.value);
  }

  function exp() {
    display.value = Math.exp(display.value);
  }
