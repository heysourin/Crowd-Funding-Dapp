import React from 'react'
import favicon from '../assets/favicon.png'

//D:\Codes\Blockchain\dApps\crowd-funding-dapp-dappmentors\src\favicon.png
const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-white text-gray-500 hover:text-gray-700 shadow-lg fixed top-0 left-0 right-0">
      <a
        href="#"
        className="flex justify-start items-center text-xl text-black space-x-1 font-semibold"
      >
        <img className="w-15 h-20 cursor-pointer" src={favicon} alt="" />
        <span>Crowd-Funding-Dapp</span>
      </a>

      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Connect Wallet
        </button>
      </div>
    </header>
  )
}

export default Header
