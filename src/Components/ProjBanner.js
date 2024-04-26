import React from 'react'
import '../Styles/ProjBanner.css'
import ProjectCard from '../Components/ProjectCard';

const project = [
    {
      name: 'E-Commerce Distributed System Platform',
      description: 'A full-stack E-Commerce platform using a self-designed distributed system to increase the fault tolerance and ability of dealing with high concurrency.',
      url: 'https://github.com/XinzhouLi/Distributed_E-commerce_platform'
    },
    {
      name: 'Live Update Group Drawing platform',
      description: 'A full-stack drawing platform using Socket.io, HTML, CSS, Javascript, Express, REST API, and Sqlite3. It implements the real-time communication between user and server, and saves the updated canvas for offlined users.',
      url: 'https://github.com/XiangyuLiualex/SENG513_Project'
    },
    {
      name: 'Parkside Cafe and Sushi Website',
      description: 'A self-design website using React.js.',
      url: 'https://parksidecs.com'
    },
    {
      name: 'Aeon Oil Services Website',
      description: 'A self-design website using React.js.',
      url: 'https://aeon-oil.vercel.app'
    }
];

export default function ProjBanner() {
  return (
    <div className='projectBanner'>
      <div className='header'>
        <h1>My Experience</h1>
        <span>Here are some of the work that I've done.</span>
      </div>
      <hr />
      <div className='project'>
        {
          project.map((pro, ind) => {
            return <ProjectCard 
                      key={ind}
                      {...pro}
                    />
          })
        }
      </div>
      <hr />
    </div>
  )
}
