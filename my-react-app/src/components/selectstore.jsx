// import { useState } from 'react'
import icon1 from '../assets/images/icon1.jpg'
import icon2 from '../assets/images/icon2.jpg'
import icon3 from '../assets/images/icon3.jpg'
import logo from '../assets/myntra logo.png'
import '../components/selectstore.css'
function SelectStore() {
  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <div>
        <div className='image-container'>
          <img src={logo} alt="" style={{width:'100px',height:'100px', position: 'relative' ,alignItems:'center',justifyContent:'center',borderRadius:'30%'}}/>
          </div>
          <h2 className='para'>Select Your Store</h2>
        <div className='icons'>
          <img src={icon1} alt="" style={{borderRadius:'38px'}} />
          </div>
        <div className='icons'> 
            <img src={icon2} alt="" style={{borderRadius:'38px'}} onClick={() => handleClick('http://localhost:5173/home')}/>
          </div>
        <div className='icons'>
          <img src={icon3} style={{borderRadius:'38px'}} alt="" />
          </div>
          
        
      </div>
    </>
  )
}

export default SelectStore