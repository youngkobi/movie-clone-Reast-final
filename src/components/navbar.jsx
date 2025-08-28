import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <div className='navbar'>

    <div>
        <h1 className='navbar_title'> KobiDevs</h1>
    </div>
    <div>
    <button 
    onClick={()=>navigate('/')}
    className='homeButton'
    >Home</button>
    </div>
    </div>
  )
}

export default Navbar
