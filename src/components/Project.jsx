import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div className="flex flex-col px-6">
      <div className="flex justify-center items-center flex-wrap">
        {Array(10)
          .fill()
          .map((card, i) => (
            <ProjectCard key={i} id={i} project={card} />
          ))}
      </div>
    </div>
  )
}

const ProjectCard = ({ card, id }) => (
  <div id="projects" className="rounded-lg shadow-lg bg-white w-64 m-4">
    <Link to={'/projects/' + id}>
      <img
        src="https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Image"
        className="rounded-xl h-64 w-full object-cover"
      />

      <div className="p-4">
        <h5>Startup Funding</h5>
        <div>
          <div className="flex justify-between mb-2">
            <h6>🏢</h6>
            <small className="text-gray-700"> 0x123...321</small>
          </div>
          <small>2 Days left</small>
        </div>
        <div className="w-full bg-gray-300">
          <div
            className="bg-pink-400 text-xs font-medium text-green-100 text-center p-0.5 loading-none rounded-l-full "
            style={{ width: '50%' }}
          ></div>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-4 mb-2">
          <small className="text-gray-500 font-bold">{15} Backers</small>
          <div>
            <small className="text-pink-400 font-bold">Open/ Paid</small>
          </div>
        </div>
      </div>
    </Link>
  </div>
)
export default Project
