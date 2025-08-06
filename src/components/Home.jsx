import React from 'react'

const Home = () => {
  return (
    <>
      <div className="space-y-12 px-6 md:px-12">

        <section className="text-center space-y-4">

          <div className="text-lg md:text-xl font-semibold text-gray-300">Securing Your Flutter App: Best Practices and Techniques</div>
          <hr className="border-gray-600 my-2" />

          <div className="text-2xl md:text-3xl font-bold">Unlock the Potential of Flutter</div>

          <div className="text-lg">
            Your Premier Partner for Cross-Platform App Excellence!
            <div className="mt-4">
              <button className="bg-cyan-400 text-white px-6 py-2 rounded hover:bg-cyan-500 transition duration-300 cursor-pointer animate-bounce">Upgrade Your Tech</button>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg space-y-6 md:space-y-0 md:flex md:justify-between md:items-start md:gap-6">
         
          <div className="md:w-1/3">
            <div className="text-2xl font-semibold">Flutter's Dawn</div>
            <p className="text-gray-300">History of flutter</p>
          </div>

          <div className="md:w-1/3 text-sm text-gray-400">
            Uncover the fascinating story of flutter in 'Flutter's Dawn: History of flutter Lorem ipsum dolor sit amet conluptate facilis mollitia dolore! Cum in rerum unde odio inventore aperiam temporibus aliquid rem veritatis. <span className="text-cyan-400 font-semibold">Click to Begin</span>
          </div>

          <div className="md:w-1/3 mt-4 md:mt-0">
            <button className="bg-cyan-400 text-white px-4 py-1 rounded hover:bg-cyan-500 transition duration-300 cursor-pointer">BEGIN</button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
