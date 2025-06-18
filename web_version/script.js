const convertButton = document.getElementById("convert");
const result = document.getElementById("result");

const rates = {
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095, JPY: 1.75, CAD: 0.016, AUD: 0.018, CNY: 0.086, RUB: 1.08, AED: 0.044, INR: 1 },
  USD: { INR: 83.2, EUR: 0.92, GBP: 0.79, JPY: 147.8, CAD: 1.34, AUD: 1.51, CNY: 7.1, RUB: 89.4, AED: 3.67, USD: 1 },
  EUR: { INR: 90.1, USD: 1.09, GBP: 0.86, JPY: 160.2, CAD: 1.45, AUD: 1.64, CNY: 7.73, RUB: 97.1, AED: 4.01, EUR: 1 },
  GBP: { INR: 105.2, USD: 1.27, EUR: 1.16, JPY: 185.3, CAD: 1.7, AUD: 1.9, CNY: 8.97, RUB: 112.5, AED: 4.65, GBP: 1 },
  JPY: { INR: 0.57, USD: 0.0068, EUR: 0.0062, GBP: 0.0054, CAD: 0.0092, AUD: 0.0103, CNY: 0.048, RUB: 0.61, AED: 0.025, JPY: 1 },
  CAD: { INR: 62.1, USD: 0.75, EUR: 0.69, GBP: 0.59, JPY: 108.3, AUD: 1.12, CNY: 5.27, RUB: 66.7, AED: 2.74, CAD: 1 },
  AUD: { INR: 55.4, USD: 0.66, EUR: 0.61, GBP: 0.52, JPY: 96.4, CAD: 0.89, CNY: 4.72, RUB: 59.8, AED: 2.33, AUD: 1 },
  CNY: { INR: 11.8, USD: 0.14, EUR: 0.13, GBP: 0.11, JPY: 20.5, CAD: 0.19, AUD: 0.21, RUB: 12.7, AED: 0.52, CNY: 1 },
  RUB: { INR: 0.92, USD: 0.011, EUR: 0.0103, GBP: 0.0089, JPY: 1.63, CAD: 0.015, AUD: 0.017, CNY: 0.079, AED: 0.041, RUB: 1 },
  AED: { INR: 22.7, USD: 0.27, EUR: 0.25, GBP: 0.21, JPY: 40.2, CAD: 0.37, AUD: 0.43, CNY: 1.91, RUB: 24.1, AED: 1 }
};

convertButton.addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  result.innerText = "";

  if (!amount || amount <= 0 || isNaN(amount)) {
    result.innerText = "❌ Please enter a valid amount.";
    return;
  }

  if (!from || !to) {
    result.innerText = "❌ Please select both currencies.";
    return;
  }

  const rate = rates[from][to];
  if (!rate) {
    result.innerText = "❌ Conversion rate not found.";
    return;
  }

  const converted = amount * rate;
  result.innerText = `✅ ${amount} ${from} = ${converted.toFixed(2)} ${to}`;
});
