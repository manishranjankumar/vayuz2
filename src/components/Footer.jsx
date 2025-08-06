import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="px-6 md:px-12 py-8 bg-gray-900 text-white flex flex-wrap gap-6 justify-between">
        <div className="hover:text-cyan-400 cursor-pointer">About</div>
        <div className="hover:text-cyan-400 cursor-pointer">Insights</div>
        <div className="hover:text-cyan-400 cursor-pointer">Community</div>
        <div className="hover:text-cyan-400 cursor-pointer">Privacy & Policies</div>
      </footer>
    </>
  )
}

export default Footer
