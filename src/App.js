import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import BarChart from './Charts/BarChart'
import LineChart from './Charts/LineChart'
import LoginPage from './Login/LoginPage'




function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LoginPage/>} />
        <Route exact path='/login' element={<SideMenu/>} />
      </Routes>
      {/* <SideMenu /> */}
    </div>
  );
}

function SideMenu() {
  return (
  <div className="flex flex-wrap bg-gray-100 w-full h-screen">
    <div className="w-3/12 bg-black rounded-f p-3 shadow-lg">
        <div className="flex items-center space-x-4 p-2 mb-5">
            <img className="h-48 rounded-full" src="https://pbs.twimg.com/tweet_video_thumb/FMd6TJVXsAM_P2q.jpg" alt="NFT image" />
            <div>
                <h4 className="font-semibold text-xl text-gray-100 capitalize font-poppins tracking-wide">NFT Profit Manager</h4>
                <div className="text-sm tracking-wide flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="20px" height="40px"><polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"/><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"/></svg><div className="text-gray-200">Verified</div>
                </div>
            </div>
        </div>
        <ul className="space-y-2 text-sm">
            <li>
                <a href="#" className="flex items-center space-x-3 text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:shadow-outline">
                    <span className="text-gray-200">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                    <span>Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center space-x-3 text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-200">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg>
                    </span>
                    <span>Notifications</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center space-x-3 text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-200">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <span>My profile</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center space-x-3 text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-200">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                    </span>
                    <span>Settings</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center space-x-3 text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-200">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>
                    <span>Change password</span>
                </a>
            </li>
            <li>
                <a href="/login" className="flex items-center space-x-3 text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-200">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </span>
                    <span>Logout</span>
                </a>
            </li>
        </ul>
    </div>

    <div className="w-9/12">
        <div className="p-4 text-gray-500 bg-gradient-to-r from-black to-blue-900">
            <Card />
            <Inventory />
            <Sales />
        </div>
    </div>
  </div>
  );
}

function Card() {
  return (
    <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12 text-lg text-slate-300">
      <div className="flex items-center justify-center text-center h-fit bg-black rounded-md border border-slate-700 shadow-lg overflow-hidden h-24">
        <div className="w-96">
        <BarChart />
        </div>
      </div>
    </div>
  );
}
 
function Inventory() {
  return (
    <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12 text-lg text-slate-300">
      <div id="inventory" className="flex items-center justify-center text-center h-80 bg-black rounded-md border border-slate-700 shadow-lg overflow-hidden h-24">
        <Container />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div id="container" className="">
      <div className="grid grid-cols-3 gap-4 p-8 w-fit">
        <img src="https://lh3.googleusercontent.com/fUXzLYjKgqtHqiePsN2nFkjSu2ZK4nRy5BhnPt4Kn8D0ypQv9lBr6g3NJgWDlRGfZjyqWTQsIy0VXW5b35y32CopKWeXO_V1_cBHkQ=w600"></img>
        <img src="https://lh3.googleusercontent.com/_xMxy7S9sXllsXc2O450bwb-9Mzx-Jr80m7npaJuBSxfiB0FtZLigjg6bACu93SFwvWfjzZgOuuehvPR2d6UNPWVKkBnWlEdf7GR=w1400-k" ></img>
        <img src="https://lh3.googleusercontent.com/Ag6-3dwQUS_iG2vVlKYbqpKrLCONuBLbwnYKyOd6FAWs3DIlRhsAyIObpFP8Qiqak72kYIYXq7YCzzbQn6hFyAq5FZldQvv_MNsWkg=w600" ></img>
        </div>
    </div>
  );
}

function Sales() {
  return (
    <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12 text-lg text-slate-300">
      <div id="inventory" className="flex items-center justify-center text-center h-fit bg-black rounded-md border border-slate-700 shadow-lg overflow-hidden h-24">
        <LineChart />
      </div>
    </div>
  );
}

export default App;
