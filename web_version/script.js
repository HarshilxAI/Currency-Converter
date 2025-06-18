function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;

    // Example static exchange rates
    const exchangeRates = {
        "USD": { "INR": 83, "EUR": 0.93, "USD": 1 },
        "INR": { "USD": 0.012, "EUR": 0.011, "INR": 1 },
        "EUR": { "USD": 1.07, "INR": 89, "EUR": 1 }
    };

    if (!amount || isNaN(amount)) {
        document.getElementById("result").innerText = "Please enter a valid amount.";
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const converted = amount * rate;

    document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`;
}
