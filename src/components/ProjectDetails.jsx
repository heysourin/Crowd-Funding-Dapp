const ProjectDetails = () => {
  return (
    <div className="py-36 px-6">
      <div>
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
              <small> 3 Days left</small>
            </div>
            <div></div>
            <div className="font-bold">
              <small className="text-gray-500 font-bold">Open/ Closed</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
