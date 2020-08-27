var numCount = 0;
var num1 = 0;
var num2 = 0;
var solution = 0;
var operation = 0;
var comulativeSum = 0;

var operationClear = false;
var currentOperation = false;
var forceClear = false;

function clearTextArea() {
  document.getElementById("display").value = "0";
  numCount = 0;
  forceClear = false;
  comulativeSum = 0;
}

function displayNumber(numberRecived) {
  if (forceClear == false) {
    if (document.getElementById("display").value == "0") {
      //Delete useless '0'

      document.getElementById("display").value = "";
      numCount--;
      if (numCount < 0) {
        numCount = 0;
      }
    }

    if (operationClear) {
      document.getElementById("display").value = ""; //Clear before insert num2
      operationClear = false;
    }

    if (numCount <= 5) {
      document.getElementById("display").value += numberRecived; //CSS Display class must be needed.
      numCount++;
    }
  } else {
    alert("Please, clear the display first.");
  }
}

function operateNumber(selector) {
  if (forceClear == false) {
    if (selector == 1) {
      //Selector #1 means to do the 'ADD OPEARATION'.

      num1 = parseInt(document.getElementById("display").value);
      comulativeSum = comulativeSum + num1;
      document.getElementById("display").value = comulativeSum;
      operationClear = true;
      currentOperation = true;
      selector = 0;
      numCount = 0;
    }

    if (selector == 5 && currentOperation) {
      //Selector #5 means was pressed the 'EQUAL BUTTON'.

      num2 = parseInt(document.getElementById("display").value);
      solution = comulativeSum + num2;
      document.getElementById("display").value = solution;
      selector = 0;
      numCount = 0;
      forceClear = true;
      currentOperation = false;
      comulativeSum = 0;
    }
  } else {
    alert("Please, clear the display first.");
  }

  mathOperations.display = displayNumber;
  mathOperations.operate = operateNumber;
  mathOperations.clear = clearTextArea;
}
