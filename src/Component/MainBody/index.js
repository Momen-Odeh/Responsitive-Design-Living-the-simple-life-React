import React from 'react'
import ImgTitle from '../ImgTitle'
import Title from '../Title'
import Para from '../Para'
import Img1 from './img1.jpg'
import './index.css'
import BtnCont from '../BtnCont'
import HR from '../HR'
import MainComponent from '../MainComponent'
function MainBody() {
  return (
    <>
      <div className='MainBody'>
      <img src={Img1} alt="" className='main-img'></img>
      <ImgTitle/>
      <Title className='titleMain'/>
      <Para/>
      <BtnCont/>
      <HR/>
      <MainComponent/>
      <MainComponent/>
      <MainComponent/>
      </div>
    </>
    
  )
}

export default MainBody