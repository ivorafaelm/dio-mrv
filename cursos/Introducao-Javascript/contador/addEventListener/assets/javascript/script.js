var currentNumber = 0

document.getElementById("increment").addEventListener("click", function() {
    currentNumber = currentNumber + 1;
    document.getElementById("currentNumber").innerHTML = currentNumber;
  }); 

  document.getElementById("decrement").addEventListener("click", function() {
    currentNumber = currentNumber - 1;
    document.getElementById("currentNumber").innerHTML = currentNumber;
  }); 