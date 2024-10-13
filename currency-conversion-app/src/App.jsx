import { useState, useEffect } from "react";
import Conversions from "./components/Conversions";
import Logic from "./components/Logic";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('KES'); 
  const [to, setTo] = useState('USD'); 
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      const rates = await Logic(from);  
      setCurrencyInfo(rates);           
    };

    fetchRates(); 
  }, [from]);

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  useEffect(() => {
    convert();
  }, [amount, to, currencyInfo]);

  const options = Object.keys(currencyInfo); 

  return (
    <div className="bg-money-hands bg-cover bg-center container mx-auto flex justify-center items-center h-screen flex-col px-4 md:px-0">
      <h1 className="text-sky-300 text-3xl md:text-5xl mb-6">Currency Converter</h1>
      
      
      <Conversions
        label="From Currency"
        amount={amount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setFrom(currency)}
        onAmountChange={(amount) => setAmount(amount)}
        selectedCurrency={from}
      />
      
      
      <Conversions
        label="To Currency"
        amount={convertedAmount} 
        currencyOptions={options}
        onCurrencyChange={(currency) => setTo(currency)}
        selectedCurrency={to}
        amountDisabled={true} 
      />

      
      <h2 className="text-white mt-4 text-2xl">
        {amount} {from} = {convertedAmount.toFixed(2)} {to}
      </h2>
    </div>
  );
}
