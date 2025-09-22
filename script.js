// Calculator Logic
document.getElementById("calculate").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers";
  } else {
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
      default:
        result = "Invalid operation";
    }
  }
  document.getElementById("result").textContent = "Result: " + result;
});

// Text Change Logic
document.getElementById("change_text").addEventListener("click", function () {
  const newTexts = ["Bye", "Good Bye", "To", "Your", "Class", "Instructions"];
  const divisions = document.querySelectorAll(".division");
  divisions.forEach((div, index) => {
    if (newTexts[index]) {
      div.textContent = newTexts[index];
    }
  });
});
