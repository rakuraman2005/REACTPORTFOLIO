import React from 'react'
import './Projectcard.css'
const Projectcard = ({path,title,description,source,live}) => {
  return (
    <>
    <div className='project-card'>
        <div className='project-image'>
     <img src={path} width='160px' height='120px'/>
     </div>
      <div className='project-content'>
         <h3 className='project-title'>{title}</h3>
         <p className='project-description'>{description}</p>
      </div>
      <div className="project-btn">
        <a href={source}>Source</a> 
        <a href={live}>Live</a>
      </div>
    </div>
    </>
  )
}

export default Projectcard