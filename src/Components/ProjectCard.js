import React from 'react'

export default function ProjectCard( { name, description, url }) {
  return (
    <div className='projBox' onClick={()=> {window.location.href = url}}>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
