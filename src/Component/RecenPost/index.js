import React from 'react'
import RecentComponent from '../RecentComponent'
import './index.css'
function RecenPost() {
  return (
    <div className='recen-post'>
      <h2 class="aside-h2">Recent Post</h2>
      <RecentComponent/>
      <RecentComponent/>
      <RecentComponent/>
    </div>
  )
}

export default RecenPost