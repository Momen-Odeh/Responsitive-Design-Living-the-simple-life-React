import React from 'react'
import AsideAbout from '../AsideAbout'
import RecenPost from '../RecenPost'
import './index.css'
function AsideBody() {
  return (
    <div className='Aside'>
      <AsideAbout/>
      <RecenPost/>
    </div>
  )
}

export default AsideBody