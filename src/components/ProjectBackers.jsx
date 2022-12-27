const ProjectBackers = () => {
  return (
    <div className="flex flex-col justify-center items-start w-full py-6">
      <div className="max-h-[calc(100vh_-_20rem)] overflow-y-auto shadow-md rounded-md w-full">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium px-6 py-4 text-left"
              >
                Backer
              </th>
              <th
                scope="col"
                className="text-sm font-medium px-6 py-4 text-left"
              >
                Donations
              </th>
              <th
                scope="col"
                className="text-sm font-medium px-6 py-4 text-left"
              >
                Refunded
              </th>
              <th
                scope="col"
                className="text-sm font-medium px-6 py-4 text-left"
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(6)
              .fill()
              .map((backing, i) => (
                <tr key={i} className="border-b border-gray-200 ">
                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                    <div
                      className="flex justify-start items-center space-x-2"
                      string={'0x123...321' + i}
                      size={25}
                    >
                      🌱
                      <span>0x123...3231</span>
                    </div>
                  </td>
                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                    <small className="flex justify-start items-center space-x-1">
                      🚀
                      <span className="text-gray-700 font-medium">{3} ETH</span>
                    </small>
                  </td>
                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                    {false ? 'Yes' : 'No'}
                  </td>
                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                    {new Date().getTime()}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjectBackers
