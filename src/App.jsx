import React from 'react'
import Home from './components/Home'
import Footer from './components/Footer'
import Middle from './components/Middle'
import Form from './components/Form'
import Navbar from './Navbar'

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="pl-48 space-y-16">
        <Home />
        <Middle />
        <Form />
        <Footer />
      </div>
    </div>
  )
}

export default App
