import React from 'react';
import './Project.css';
import icon from '../../images/Group 2.png'

const Project = () => {
  return (
    <div>
      <div className='imageContainer'>
        <img src={icon} alt='icon' className='icon' />
        <h1 className='text'>Projects</h1>
      </div>
    </div>
  )
}

export default Project
