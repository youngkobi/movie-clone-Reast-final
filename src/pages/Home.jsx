import React, { useState } from 'react'
import s_icon from "../assets/spyglass-icon.png"
import m_icon from '../assets/moviestack-icon.jpg'
import { useNavigate } from 'react-router-dom'

const Home = ({searchterm, setSearchterm}) => {

const navigate = useNavigate()
 const [loading, setLoading] = useState(false);



function onSearch() {
  setLoading(true)
  
  
  setTimeout(() => {
    navigate('/search')
  }, 2000);
  console.log(searchterm);


   
    
}




  return (
    <div >
        <div className='home_title-wrapper'>
<h1 className='home_title'>This is a Movie Search Api. <span className='red'>What movie would you like to see!</span></h1>
<img src={m_icon} alt="" className='home_title-img'/>
</div>
<div className='home_divider'></div>
   <div className='input_div'> 
    <input type="text" 
    placeholder='Movies?'
    className='home_input'
    value={searchterm}
        onChange={(event) => setSearchterm(event.target.value)}
        onKeyPress={(event)=> event.key === 'Enter' && onSearch()}
    />
    {
      loading ? 
      <div class="loader"></div>
        :
      <img src={s_icon} alt=""  width={40}
    onClick={()=>onSearch()}
    className='s_icon'
/>}
    </div>
    </div>
  )
}

export default Home
