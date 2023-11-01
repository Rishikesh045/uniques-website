import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Footer from './Components/Footer'
// import NewNav from './Components/NewNav'
// import Navnew from './Components/NewNav'


export const App = () => {
  return (
    <div>
      <>
        <Navbar />
        {/* <NewNav /> */}
        <Footer />
      </>
    </div>
  )
}
export default App