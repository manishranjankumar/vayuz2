import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-full w-48 bg-black border-r border-gray-800 text-white p-6 flex flex-col items-start space-y-6 z-50">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
        VAYUZ
      </h1>

      <div className="relative">
        <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 z-0"></div>
        <button className="relative z-10 bg-black text-white px-4 py-2 rounded-full font-semibold w-full">
          CONTACT US
        </button>
      </div>

      <ul className="space-y-3 font-medium text-gray-300">
        <li className="hover:text-white cursor-pointer">App Development</li>
        <li className="hover:text-white cursor-pointer">Challenges</li>
        <li className="hover:text-white cursor-pointer">Hire Developer</li>
        <li className="hover:text-white cursor-pointer">Community</li>
      </ul>
    </nav>
  )
}

export default Navbar
