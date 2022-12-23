const ProjectDetails = () => {
  return (
    <div className="py-36 px-6 justify-center">
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-start items-start flex-wrap">
          <img
            src="https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Project title"
            className="rounded-xl h-64 w-full sm:w-1/4 object-cover"
          />

          <div className="flex-1 py-4">
            <div className="flex flex-col justify-start flex-wrap">
              <h5 className="text-gray-900 text-sm font-medium mb-2">
                Startup Funding:
              </h5>
              <small className="text-gray-800"> 3 Days left</small>
            </div>

            <div>
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-start space-x-2">
                  <span>🌱</span>
                  <small className="text-gray-700">0x123...321</small>
                  <small className="text-gray-500 font-bold">
                    {16} Backings
                  </small>
                </div>
              </div>
            </div>

            <div className="font-bold">
              <small className="text-gray-500">Open/ Closed</small>
            </div>
          </div>
        </div>
        <p className="text-sm font-light mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea
          nihil expedita sunt eaque ratione voluptatibus et aut molestias quam.
          Nostrum totam qui temporibus! Doloremque iste totam fuga? Ducimus,
          explicabo.
        </p>
        <div className="w-full bg-gray-300 mt-4">
          <div
            className="bg-pink-400 text-xs font-medium text-green-100 text-center p-0.5 loading-none rounded-l-full "
            style={{ width: '50%' }}
          ></div>
        </div>
        <div className="flex justify-between items-center font-bold mt-2">
          <small>{3} ETH Raised</small>
          <small className="flex justify-start items-center ">
            <h6>🚀</h6>
            <span>{10} ETH </span>
          </small>
        </div>

        <div className="flex justify-between items-center font-bold mt-4">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Back Project
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Edit
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Delete{' '}
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Payout
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
