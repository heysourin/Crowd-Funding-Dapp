import { setGlobalState } from "../store"

const Hero = () => {
  return (
    <div className="text-center bg-white text-gray-800 py-36 px-6">
      <h1 className="text-4xl md:text-4xl xl:text-6xl font-bold tracking-tight">
        <span>Bring Creative Projects To Life On</span>
        <br />
        <span className="uppercase text-pink-500">Genesis.</span>
      </h1>

      <div>
        <button
          type="button"
          className="text-pink-600 border-2 border-pink-500 hover:bg-gradient-to-br hover:bg-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-12"
          onClick={()=>setGlobalState('createModal','scale-100')}
        >
          Add Project
        </button>
        <button
          type="button"
          className="text-pink-600 border-2 border-pink-500 hover:bg-gradient-to-br hover:bg-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-12"
        >
          Back Project
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center h-20 border  shadow-md w-full">
          <span className='text-lg font-bold text-pink-500 leading-5'>0</span>
          <span>Projects</span>
        </div>
        
        <div className="flex flex-col justify-center items-center h-20 border  shadow-md w-full">
          <span className='text-lg font-bold text-pink-500 leading-5'>0</span>
          <span>Backings</span>
        </div>

        <div className="flex flex-col justify-center items-center h-20 border  shadow-md w-full">
          <span className='text-lg font-bold text-pink-500 leading-5'>0 ETH</span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
