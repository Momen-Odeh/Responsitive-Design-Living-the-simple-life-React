import React from 'react'
import LeftComponent from '../LeftComponent'
import RightComponent from '../RightComponent'
import './index.css'
function MainComponent() {
  return (
    <div className="component">
        <LeftComponent/>
        <RightComponent/>
    </div>
  )
}

export default MainComponent