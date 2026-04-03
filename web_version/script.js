const convertButton = document.getElementById("convert");
const result = document.getElementById("result");
const resultContainer = document.getElementById("result-container");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const switchBtn = document.getElementById("switch-currencies");
const symbolSpan = document.querySelector(".currency-symbol");

const rates = {
  INR: { USD: 0.0108, EUR: 0.0100, GBP: 0.0085, JPY: 1.67, CAD: 0.0145, AUD: 0.0155, CNY: 0.078, RUB: 0.97, AED: 0.039, INR: 1 },

  USD: { INR: 92.7, EUR: 0.93, GBP: 0.80, JPY: 156.0, CAD: 1.36, AUD: 1.55, CNY: 7.30, RUB: 94.0, AED: 3.67, USD: 1 },

  EUR: { INR: 99.5, USD: 1.07, GBP: 0.86, JPY: 167.0, CAD: 1.46, AUD: 1.66, CNY: 7.85, RUB: 101.0, AED: 3.95, EUR: 1 },

  GBP: { INR: 116.0, USD: 1.25, EUR: 1.16, JPY: 194.0, CAD: 1.70, AUD: 1.92, CNY: 9.15, RUB: 118.0, AED: 4.60, GBP: 1 },

  JPY: { INR: 0.59, USD: 0.0064, EUR: 0.0060, GBP: 0.0052, CAD: 0.0087, AUD: 0.0099, CNY: 0.047, RUB: 0.60, AED: 0.023, JPY: 1 },

  CAD: { INR: 68.2, USD: 0.74, EUR: 0.68, GBP: 0.59, JPY: 114.5, AUD: 1.13, CNY: 5.30, RUB: 69.0, AED: 2.70, CAD: 1 },

  AUD: { INR: 59.8, USD: 0.65, EUR: 0.60, GBP: 0.52, JPY: 101.0, CAD: 0.89, CNY: 4.70, RUB: 62.0, AED: 2.45, AUD: 1 },

  CNY: { INR: 12.6, USD: 0.14, EUR: 0.13, GBP: 0.11, JPY: 21.3, CAD: 0.19, AUD: 0.21, RUB: 12.9, AED: 0.50, CNY: 1 },

  RUB: { INR: 1.05, USD: 0.0106, EUR: 0.0099, GBP: 0.0085, JPY: 1.66, CAD: 0.014, AUD: 0.016, CNY: 0.077, AED: 0.039, RUB: 1 },

  AED: { INR: 25.2, USD: 0.27, EUR: 0.25, GBP: 0.22, JPY: 42.5, CAD: 0.37, AUD: 0.41, CNY: 1.99, RUB: 25.5, AED: 1 }
};

const currencySymbols = {
  USD: '$', EUR: '€', GBP: '£', INR: '₹', JPY: '¥', CAD: 'C$', AUD: 'A$', CNY: '¥', RUB: '₽', AED: 'د.إ'
};

fromSelect.addEventListener('change', () => {
  symbolSpan.textContent = currencySymbols[fromSelect.value] || '$';
});

switchBtn.addEventListener('click', () => {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  fromSelect.dispatchEvent(new Event('change'));
});

function displayResult(message, isError = false) {
  resultContainer.classList.remove("hidden");

  // Trigger animation by forcing a reflow
  resultContainer.classList.remove("show-anim");
  void resultContainer.offsetWidth;
  resultContainer.classList.add("show-anim");

  result.innerText = message;

  if (isError) {
    resultContainer.style.background = "rgba(239, 68, 68, 0.1)";
    resultContainer.style.borderColor = "rgba(239, 68, 68, 0.2)";
    document.querySelector(".result-label").style.color = "#ef4444";
    document.querySelector(".result-label").innerText = "Error";
    result.style.fontSize = "20px";
  } else {
    resultContainer.style.background = "rgba(16, 185, 129, 0.1)";
    resultContainer.style.borderColor = "rgba(16, 185, 129, 0.2)";
    document.querySelector(".result-label").style.color = "var(--success)";
    document.querySelector(".result-label").innerText = "Converted Amount";
    result.style.fontSize = "32px";
  }
}

convertButton.addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = fromSelect.value;
  const to = toSelect.value;

  if (!amount || amount <= 0 || isNaN(amount)) {
    displayResult("Please enter a valid amount.", true);
    return;
  }

  if (!from || !to) {
    displayResult("Please select currencies.", true);
    return;
  }

  const rate = rates[from][to];
  if (!rate) {
    displayResult("Conversion rate not found.", true);
    return;
  }

  const converted = amount * rate;
  let toSymbol = currencySymbols[to] || '';
  displayResult(`${toSymbol}${converted.toFixed(2)}`);
});

// Initialize symbol
fromSelect.dispatchEvent(new Event('change'));
