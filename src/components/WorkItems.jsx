import React from 'react'
import { Link } from 'react-router-dom'
import Project from './Project'
import './WorkItems.css'

function WorkItems({projectData}) {
  return (
    <div className='workitems-container'>
    {projectData.map((project) => {
      return(
        <Link to={`/${project.link}`} className='project'>
          <Project projectData={project} />
        </Link>
      )
    })}
    </div>
  )
}

export default WorkItems