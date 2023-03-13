import React from 'react'
import Title from '../Title'
import './index.css'
import Img2 from './img2.jpg'
function AsideAbout() {
  return (
    <> 
    <div className='aside-about'>
    <h2 class="aside-h2">About me</h2>
      <img src={Img2}></img>
      <p class="aside-p">I find life better, and I'm happier, when things are nice and simple.</p>
      
    </div>
    </>
  )
}

export default AsideAbout