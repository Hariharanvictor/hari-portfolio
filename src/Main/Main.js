import React from 'react'
import profileImg from '../assest/profile.jpg';
import './Main.css'

const Main = () => {
  return (
    <div  className="container home-div">
      
    <div className='row  d-flex'> {/* Ensure full viewport height */}
    <div className='col-8 d-flex justify-content-center align-items-center content-div '>
        <div> 
            <p className='content-blue'>Hi,</p>
            <p className='content-blue'>My name is</p>
            <p className='content-gradient'>Hariharan S</p>
            <p className='content-blue'>A Front End Developer</p>
        </div>
    </div>
    <div className='col-4 rounded d-flex justify-content-center align-items-center  img-div mt-5'>
        <img src={profileImg} className="img-fluid profile-img" alt=""/>
    </div>
</div>

</div>

  )
}

export default Main