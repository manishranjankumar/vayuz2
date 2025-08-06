import React from 'react'

const Form = () => {
  return (
    <>
      <div className="px-6 md:px-12 space-y-10">
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Ready to Build Something Amazing?</h1>
          <p className="text-gray-300">Tell us what you need, and we’ll get in touch.</p>
        </section>

        <form className="bg-gray-800 p-6 rounded-lg space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded bg-gray-900 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded bg-gray-900 text-white placeholder-gray-400"
          />
          <textarea
            placeholder="Tell us more..."
            className="w-full p-2 rounded bg-gray-900 text-white placeholder-gray-400"
            rows={5}
          />
          <button
            type="submit"
            className="bg-cyan-400 text-white px-6 py-2 rounded hover:bg-cyan-500 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Form
