import React from 'react'
import './Project.css'
import Projectcard from './Projectcard'

const Project = () => {
  return (
    <>
    <div>
      <h1 className='project-name'><span>P</span>rojects</h1>
      <div className='project-container'>
      <Projectcard path='./project images/skills.png' title='smart gas system' description='arduino c++ java html css and all components used' source='' live=''/>
      <Projectcard path='./project images/skills.png' title='smart gas system' description='arduino c++ java html css and all components used' source='' live=''/>
      <Projectcard path='./project images/skills.png' title='smart gas system' description='arduino c++ java html css and all components used' source='' live=''/>
      <Projectcard path='./project images/skills.png' title='smart gas system' description='arduino c++ java html css and all components used' source='' live=''/>
      <Projectcard path='./project images/skills.png' title='smart gas system' description='arduino c++ java html css and all components used' source='' live=''/>
      <Projectcard path='./project images/skills.png' title='smart gas system' description='arduino c++ java html css and all components used' source='' live=''/>
      </div>
      </div>
    </>
  )
}

export default Project