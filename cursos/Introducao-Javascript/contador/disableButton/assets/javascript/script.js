var currentNumber = 0

document.getElementById("increment").addEventListener("click", function() {
    if (currentNumber <= 9) {
      currentNumber = currentNumber + 1;
      document.getElementById("currentNumber").innerHTML = currentNumber;
    } else {
      document.getElementById("increment").disabled;
    }
  }); 

  document.getElementById("decrement").addEventListener("click", function() {
    if (currentNumber >= 1) {
      currentNumber = currentNumber - 1;
      document.getElementById("currentNumber").innerHTML = currentNumber;
    } else {
      document.getElementById("decrement").disabled;
    }
  }); 