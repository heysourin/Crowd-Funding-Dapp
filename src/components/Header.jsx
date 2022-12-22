import React from 'react'
import { Link } from 'react-router-dom'
import favicon from '../assets/favicon.png'

//D:\Codes\Blockchain\dApps\crowd-funding-dapp-dappmentors\src\favicon.png
const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-white text-gray-500 hover:text-gray-700 shadow-lg fixed top-0 left-0 right-0">
      <Link
        to="/"
        href="#"
        className="flex justify-start items-center text-xl text-black space-x-1 font-semibold"
      >
        <img className="w-15 h-20 cursor-pointer" src={favicon} alt="" />
        <span>Crowd-Funding-Dapp</span>
      </Link>

      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Connet Wallet
        </button>
      </div>
    </header>
  )
}

export default Header
