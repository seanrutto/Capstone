export default function Conversions({
    label = "Amount",
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "KES",
    amountDisabled = false,
}) {
    return (
        <div className="w-full max-w-md mb-4 flex flex-col space-y-4">
            <div>
                <label htmlFor="amount" className="block mb-1 text-gray-700">{label}</label>
                <input 
                    type="number" 
                    id="amount" 
                    placeholder="Enter Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    className="w-full p-2 border border-gray-400 rounded-md"
                />
            </div>

            <div>
                <label htmlFor="currencies" className="block mb-1 text-gray-700">Select Currency</label>
                <select 
                    id="currencies"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}
