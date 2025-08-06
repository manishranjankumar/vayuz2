import React from 'react'

const Middle = () => {
  return (
    <>
      <div className="px-6 md:px-12 space-y-10">

        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Our Dynamic Service Suite</h1>
          <h2 className="text-xl md:text-2xl">Embrace Innovation: Let's Create Together</h2>
          <div className="text-gray-300">
            <p>Step into innovation! Explore our range of services and let's create something together.</p>
            <p>Your Vision, our expertise. Let's begin!</p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold">Flutter App Development</h3>
            <p className="text-sm text-gray-300 mt-2">
              Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance apps for any platform — faster and easier than ever before. Ready to revolutionize your app experience? Let's get started today!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-gray-200">
            <h3 className="hover:text-cyan-400 cursor-pointer">UI/UX<br />Design +</h3>
            <h3 className="hover:text-cyan-400 cursor-pointer">Customization<br />Integration +</h3>
            <h3 className="hover:text-cyan-400 cursor-pointer">Testing<br />Quality Assurance +</h3>
            <h3 className="hover:text-cyan-400 cursor-pointer">Maintenance<br />Support +</h3>
            <h3 className="hover:text-cyan-400 cursor-pointer">Consulting<br />Training +</h3>
            <h3 className="hover:text-cyan-400 cursor-pointer">Migration<br />Upgrades +</h3>
          </div>
        </section>
      </div>
    </>
  )
}

export default Middle
