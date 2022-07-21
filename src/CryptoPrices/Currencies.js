import React, {useState, useEffect} from 'react';
import './Currencies.css'
import CurrencyChart from '../Charts/CurrencyChart';

function Prices() {
    return(
        <div id="current" className="text-white bg-slate-800 h-full">
           <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12 text-lg text-slate-300">
             <div className="text-center"> Crypto Prices </div>
                <div id="inventory" className="flex items-center justify-center text-center h-96 bg-black rounded-md border border-slate-700 shadow-lg overflow-hidden">
                <CurrencyChart />
        </div>
      </div>
      <Bitcoin />
      <Sol />
      <Eth />
    </div>
    );
}

  

function Sol() {

  const [solana, setSolana] = useState([]);
  const baseUrl = 'https://api.coinbase.com/v2/prices/SOL-USD/spot'

  
  const getCurrency = async () => {
    const options = {
        method: 'GET',
        headers: {Accept: 'application/json'}
      };
      
      fetch(`${baseUrl}`, options)
      .then(response => response.json())
      .then((res) => {
        setSolana(res.data.amount)
      })
      .then(response => console.log(response)) 
      .catch(err => console.error(err));



    //  const data = await res.json()
      
    //  setSolana(data.amount)
}


useEffect(() => {
    getCurrency();
}, [solana])

  return(
         <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12 text-lg text-slate-300">
           <div className="text-center"> 
                  <h1 className="text-3xl">Solana</h1>
                </div>
              <div id="inventory" className="flex items-center justify-center text-center h-96 bg-gradient-to-r from-black via-teal-600 to-purple-500 rounded-md border border-slate-700 shadow-lg overflow-hidden">
              <img className="w-24 rounded-full" src= "https://www.economywatch.com/wp-content/uploads/2021/06/solana-1.jpg" /> 
                <h1 className="text-3xl p-4">{solana}</h1>
          </div>
    </div>
  );
}

function Eth() {

  const [ethereum, setEthereum] = useState([]);
  const baseUrl = 'https://api.coinbase.com/v2/prices/ETH-USD/spot'

  
  const getCurrency = async () => {
    const options = {
        method: 'GET',
        headers: {Accept: 'application/json'}
      };
      
      fetch(`${baseUrl}`, options)
      .then(response => response.json())
      .then((res) => {
        setEthereum(res.data.amount)
      })
      .then(response => console.log(response)) 
      .catch(err => console.error(err));
}


useEffect(() => {
    getCurrency();
}, [ethereum])

  return(
         <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12 text-lg text-slate-300">
           <div className="text-center"> 
                  <h1 className="text-3xl">Ethereum</h1>
                </div>
              <div id="inventory" className="flex items-center justify-center text-center h-96 bg-gradient-to-r from-black via-slate-800 to-indigo-400 rounded-md border border-slate-700 shadow-lg overflow-hidden">
              <img className="w-24 rounded-full" src= "https://orionx.net/wp-content/uploads/2018/04/Ethereum-logo-black-888x500.jpg" /> 
                <h1 className="text-3xl p-4">{ethereum}</h1>
          </div>
    </div>
  );
}


function Bitcoin() {

  const [bitcoin, setBitcoin] = useState([]);
  const baseUrl = 'https://api.coinbase.com/v2/prices/BTC-USD/spot'

  
  const getCurrency = async () => {
    const options = {
        method: 'GET',
        headers: {Accept: 'application/json'}
      };
      
      fetch(`${baseUrl}`, options)
      .then(response => response.json())
      .then((res) => {
        setBitcoin(res.data.amount)
      })
      .then(response => console.log(response)) 
      .catch(err => console.error(err));
}


useEffect(() => {
    getCurrency();
}, [bitcoin])

  return(
         <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12 text-lg text-slate-300">
           <div className="text-center"> 
                  <h1 className="text-3xl">Bitcoin</h1>
                </div>
              <div id="inventory" className="flex items-center justify-center text-center h-96 bg-gradient-to-r from-black via-amber-600 to-gray-500 rounded-md border border-slate-700 shadow-lg overflow-hidden">
              <img className="w-24 rounded-full" src= "https://i.pinimg.com/originals/ca/1b/79/ca1b79af209cb5d3935bddb1513ba220.jpg" /> 
                <h1 className="text-3xl p-4">{bitcoin}</h1>
          </div>
    </div>
  );
}


export default Prices