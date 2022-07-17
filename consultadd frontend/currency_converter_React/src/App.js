import './App.css';
import CurrencyRow from './CurrencyRow';
import {useState} from 'react';

const options = [
  {
    label: "USD",
    value: "0.013",
  },
  {
    label: "JPY",
    value: "1.72",
  },
  {
    label: "AUD",
    value: "0.018",
  },
  {
    label: "CAD",
    value: "0.023",
  },
];

function App() {

  var ans = useState('0');

  const [amount, setAmount] = useState('');

  const [selectedCurrency, setCurrency] = useState('0.1');

  const onChangeAmount = event => {
    setAmount(event.target.value);
    console.log('value of input is:', ans);
  };

  const onChangeCurrency = event => {
    setCurrency(event.target.value);
    console.log('value of select is:', ans);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
            {options.map((option) => (
              <option key={option.label} value={option.value}>{option.label}</option>
            ))}
      </select>
      <CurrencyRow ans = {amount*selectedCurrency}></CurrencyRow>
      <h4>ans from 1st component</h4>
      <h3>{amount*selectedCurrency}</h3>
    </div>
  );
}

export default App;
