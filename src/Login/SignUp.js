import React from 'react';
import './SignUp.css';


function SignUp() {
    return (
        <div className="">
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
   <div className="max-w-md w-full space-y-8">
     <div>
       <img className="mx-auto h-12 w-auto rounded-full" src="https://images.unsplash.com/photo-1644143379190-08a5f055de1d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632" alt="BlockChain" />
       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200">Sign Up for an account!</h2>
       <p className="mt-2 text-center text-sm text-gray-600"></p>
     </div>
     <form className="mt-8 space-y-6" action="/Login" method="GET">
       <input type="hidden" name="remember" value="true" />
       <div className="rounded-md shadow-sm -space-y-px">
         <div className="p-2">
           <label for="user-name" className="sr-only">UserName</label>
           <input id="user-name" name="username" type="username" autocomplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="UserName" />
         </div>
         <div className="p-2">
           <label for="user-email" className="sr-only">Email</label>
           <input id="user-email" name="email" type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
         </div>
         <div className="p-2 rounded-full">
           <label for="user-password" className="sr-only">Password</label>
           <input id="user-password" name="password" type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
         </div>
       </div>

       <div>
         <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-400 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
           <span className="absolute left-0 inset-y-0 flex items-center pl-3">
             <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
               <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
             </svg>
           </span>
           Sign Up
         </button>
       </div>
     </form>
   </div>
 </div> 
     ); 
        </div>
    );
}

export default SignUp;