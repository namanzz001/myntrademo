// import React from 'react'
import icon1 from '../assets/images/minimalistt.jpg'
import icon2 from '../assets/images/streetwear.jpg'
import icon3 from '../assets/images/vintage.jpg'
import logo from '../assets/myntra logo.png'
import model from '../assets/images/modell.jpg'
import '../components/selectaesthetic.css'
 function SelectAesthetic() {
    const handleClick = (url) => {
        window.location.href = url;
      };
  return (
    <div>
         <div className='image-container3'>
          <img src={logo} alt="" style={{width:'50px',height:'50px', position: 'relative' ,alignItems:'center',justifyContent:'center',borderRadius:'30%'}}/>
          </div>
          <h2 className='para3'>Pick Your Aesthetic </h2>
        <div className='icons3'>
          <img src={icon1} alt="" style={{borderRadius:'20px',width:'640px',height:'355px'}} />
          <h2 className='text-overlay'>Minimalist</h2>
          </div>
        <div className='icons3'> 
            <img src={icon2} alt="" style={{ borderRadius:'20px',width:'640px',height:'355px'}}/>
            <h2 className='text-overlay2'>Street Wear</h2>
          </div>
        <div className='icons3'>
          <img src={icon3} alt="" style={{borderRadius:'20px',width:'640px',height:'355px'}} />
          <h2 className='text-overlay3'>Vintage</h2>
          </div>
          <div className='icons3'>
          <img src={model} alt="" style={{borderRadius:'20px',width:'640px',height:'355px'}} onClick={() => handleClick('http://localhost:5173/home/selectaesthetic/quiz')}/>
          <h2 className='text-overlay4'>Confused? <br />We Can Help! <br/></h2>
          </div>
    </div>
  )
}

export default SelectAesthetic
