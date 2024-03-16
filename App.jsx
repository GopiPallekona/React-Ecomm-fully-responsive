import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navitems from './components/Navitems'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navitems />
    <div className='min-vh-100'>
    <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default App
