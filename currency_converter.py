from forex_python.converter import CurrencyRates

c = CurrencyRates()

print("🌍 Welcome to Currency Converter 🌍")
print("Supported currencies: USD, EUR, GBP, INR, JPY, AUD, CAD, CHF, CNY, NZD, SGD, KRW, ZAR, RUB, BRL, MXN, SEK, NOK, DKK, HKD\n")

from_currency = input("Enter the base currency code (e.g., USD): ").upper()
to_currency = input("Enter the target currency code (e.g., INR): ").upper()

try:
    amount = float(input(f"Enter amount in {from_currency}: "))
    converted_amount = c.convert(from_currency, to_currency, amount)
    print(f"\n✅ {amount} {from_currency} = {converted_amount:.2f} {to_currency}")
except Exception as e:
    print(f"❌ Error: {e}")
