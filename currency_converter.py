# ----------------------------
# Simple Currency Converter (Offline)
# ----------------------------

# Ask the user to enter amount and currencies
amount = float(input("Enter amount: "))
from_currency = input("From Currency (e.g. INR): ").upper()
to_currency = input("To Currency (e.g. USD): ").upper()

# Set a fake exchange rate for now (you can change this)
# Example: 1 INR = 0.012 USD
# We'll make it smarter below

# Create a simple dictionary of some example exchange rates
exchange_rates = {
    ("INR", "USD"): 0.012,
    ("USD", "INR"): 83.0,
    ("INR", "EUR"): 0.011,
    ("EUR", "INR"): 89.0,
    ("USD", "EUR"): 0.93,
    ("EUR", "USD"): 1.07
}

# Check if conversion pair is available
key = (from_currency, to_currency)

if key in exchange_rates:
    rate = exchange_rates[key]
    converted_amount = amount * rate
    print(f"\n💱 {amount} {from_currency} = {converted_amount:.2f} {to_currency}")
else:
    print("\n⚠️ Sorry, conversion rate for this currency pair is not available in the system.")
