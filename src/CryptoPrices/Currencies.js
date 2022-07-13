import React from 'react';
import './Currencies.css'
import CurrencyChart from '../Charts/CurrencyChart';

function Prices() {
    return (
        <div id="current" className="text-white bg-blue-900 h-screen">
           <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12 text-lg text-slate-300">
             <div className="text-center"> Crypto Prices </div>
                <div id="inventory" className="flex items-center justify-center text-center h-96 bg-black rounded-md border border-slate-700 shadow-lg overflow-hidden">
                <CurrencyChart />
        </div>
      </div>
    </div>
    );
}



export default Prices