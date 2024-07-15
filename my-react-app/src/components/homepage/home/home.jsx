// import React from 'react'
import Navbar from '../../../assets/images/navbar.png'
import Homepage1 from '../../../assets/images/homepage1.png'
import Homepage2 from '../../../assets/images/homepage2.png'
import Homepage3 from '../../../assets/images/homepage3.png'
import Homepage4 from '../../../assets/images/homepage4.png'
import Footer from '../../../assets/images/footer.png'
import '../home/home.css'
import '../explore/explore.css'
 function Home() {
    const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
const handleClick = (url) => {
    window.location.href = url;
  };

  return (
 <div>
    <div className='navbar'>
          <img src={Navbar} alt="" style={{width:'1480px',position:'fixed',left:'0',top:'0'}}/>
    </div>
    <div className='home1'>
          <img src={Homepage1} alt="" style={{width:'1500px'}}/>
    </div>
    <div className='home'>
          <img src={Homepage2} alt="" style={{width:'1500px'}}/>
    </div>
    <div className='home'>
          <img src={Homepage3} alt="" style={{width:'1500px'}}/>
          </div>
    <div className='home'>
          <img src={Homepage4} alt="" style={{width:'1500px'}}/>
    </div>
    <div className='home'>
          <img src={Footer} alt="" style={{width:'1500px'}}/>
    </div>
    <div className="container" >
   <button className="button" onClick={() => handleClick('http://localhost:5173/home/selectaesthetic')}>
    Choose Your Aesthetic
   </button>
</div>
</div>
  )
}
export default Home