import AddButton from '../components/AddButton'
import CreateProject from '../components/CreateProject'
// import UpdateProject from '../components/UpdateProject'
import Hero from '../components/Hero'
import Project from '../components/Project'

const Home = () => {
  return (
    <>
      <Hero />
      <Project />
      <div className="flex justify-center items-center my-5">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Load More
        </button>
      </div>
      <CreateProject/>
      {/* <UpdateProject/> */}
      <AddButton/>
    </>
  )
}

export default Home
