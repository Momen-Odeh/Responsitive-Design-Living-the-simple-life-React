import React from 'react'
import ImgTitle from '../ImgTitle'
import Img3 from './img3.jpg'
import './index.css'
function LeftComponent() {
  return (
    <>
        <div className='leftcomponent'>
            <img src={Img3} alt="" className=''></img>
            <ImgTitle/>
        </div>
        
    </>
    
  )
}

export default LeftComponent