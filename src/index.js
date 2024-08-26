// src/index.js
import BMICalculator from './bmiCalculator';
import './styles.css';

document.getElementById("calculate-btn").addEventListener("click", function () {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    document.getElementById("result").innerText =
      "Please enter valid weight and height.";
    return;
  }

  const bmiCalculator = new BMICalculator(weight, height);
  const category = bmiCalculator.category();
  document.getElementById("result").innerText = bmiCalculator.tampilkan();
  document.getElementById("description").innerText = bmiCalculator.describeCategory(category);

  document.getElementById("bmi-calculator").className = "w-full lg:w-1/2 shadow-lg rounded-lg p-6";
  document.getElementById("bmi-result").className = "w-full lg:w-1/2 shadow-lg rounded-lg p-6";
  document.getElementById("bmi-result").classList.remove("hidden");
  document.getElementById("reset-btn").classList.remove("hidden");
});

document.getElementById("reset-btn").addEventListener("click", function () {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("description").innerText = "";

  document.getElementById("bmi-result").className = "w-full hidden lg:shadow-lg rounded-lg p-6";
  document.getElementById("reset-btn").classList.add("hidden");
  document.getElementById("bmi-calculator").className = "w-full lg:max-w-lg shadow-lg p-6 border rounded-lg";
});
