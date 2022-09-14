import React from 'react'

function Project({projectData}) {

  const {name, description} = projectData

  return (
        <div>
          <p className='project-header'>{name}</p>
          <p className='project-description'>{description}</p>
        </div>
  )
}

export default Project