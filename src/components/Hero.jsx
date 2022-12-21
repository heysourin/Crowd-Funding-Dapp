import React from 'react'

const Hero = () => {
  return (
    <div className="text-center bg-white text-gray-800 py-36 px-6">
      <h1 className="text-4xl md:text-4xl xl:text-6xl font-bold tracking-tight">
        <span>Bring Creative Projects To Life On</span>
        <br />
        <span className="uppercase text-pink-500">Genesis.</span>
      </h1>

  
      <button
        type="button"
        class="text-pink-600 border-2 border-pink-500 hover:bg-gradient-to-br hover:bg-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-12"
      >
        Add Project
      </button>
      <button
        type="button"
        class="text-pink-600 border-2 border-pink-500 hover:bg-gradient-to-br hover:bg-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-12"
      >
        Back Project
      </button>
    </div>
  )
}

export default Hero
