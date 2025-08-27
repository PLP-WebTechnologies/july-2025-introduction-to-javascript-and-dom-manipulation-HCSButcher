// Part 1: Variables & Conditionals

function checkAge() {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("age-result").textContent = " You are an adult!";
  } else {
    document.getElementById("age-result").textContent = " You are underage.";
  }
}

// Custom reusable function
function showTotal(a, b) {
  let total = calculateTotal(a, b);
  document.getElementById("total-result").textContent = "Total = " + total;
}

// Function to calculate sum
function calculateTotal(x, y) {
  return x + y;
}

// Loops

function listFruits() {
  let fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange", "🍇 Grapes"];
  let listElement = document.getElementById("fruit-list");
  listElement.innerHTML = ""; // clear old list

  // Using for loop
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    listElement.appendChild(li);
  }

  // Using while loop (just for demo, adds countdown)
  let countdown = 3;
  while (countdown > 0) {
    console.log("Countdown: " + countdown);
    countdown--;
  }
}

//  DOM Manipulation

document.getElementById("toggle-btn").addEventListener("click", function () {
  let textElement = document.getElementById("toggle-text");

  if (textElement.style.display === "none") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
});
