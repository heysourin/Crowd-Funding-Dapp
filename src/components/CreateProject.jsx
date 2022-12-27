import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalState, setGlobalState } from '../store'

const CreateProject = () => {
  const [createModal] = useGlobalState('createModal')
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${createModal}`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form action="" className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Add Project</p>
            <button
              type="button"
              className="border-0 bg-transparent focus:outline-none"
              onClick={() => setGlobalState('createModal', 'scale-0')}
            >
              <FaTimes
              />
            </button>
          </div>

          <div className="flex justify-center mt-5">
            <div className="rounded-xl overflow-hidden h-20 w-20">
              <img
                src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Title"
                className="h-full w-full object-cover cursosr-pointer"
              />
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
            <input
              className="bg-transparent rounded-sm block w-full p-2.5"
              type="text"
              step={0.01}
              min={0.01}
              name="Title"
              placeholder="Title "
              required
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
            <input
              className="bg-transparent rounded-sm block w-full p-2.5 "
              type="number"
              step={0.01}
              min={0.01}
              name="amount"
              placeholder="Amount in ETH"
              required
            />
          </div>
          <div
            className="flex justify-between items-center bg-gray-300 rounded-xl mt-5 focus:outline-none
            focus:ring-0"
          >
            <input
              className="bg-transparent rounded-sm block w-full p-2.5 "
              type="date"
              name="date"
              placeholder="Expires"
              required
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
            <input
              className="bg-transparent rounded-sm block w-full p-2.5 focus:outline focus:ring-0"
              type="url"
              name="imageURL"
              placeholder="Image URL"
              required
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
            <textarea
              className="bg-transparent rounded-sm block w-full p-2.5  text-sm text-slate-500 focus:outline-none focus:ring-0"
              type="text"
              name="description"
              placeholder="Description"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6"
          >
            Submit Project
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateProject
