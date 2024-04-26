import React from 'react'
import '../Styles/AboutMe.css'
import MyImg from '../img/wuslogo.png'
import TrackVisibility from 'react-on-screen';

export default function AboutMe() {
  return (
    <div className='aboutMe'>
      <div className='myIntro'>
        <div className='content'>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? 'animate__animated animate__fadeIn' : 'notShowImg'}>
                  <img src={MyImg} alt='my pic'></img>
            </div>}
          </TrackVisibility>
        </div>
        <div className='content'>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? 'animate__animated animate__fadeIn' : 'notShowIntro'}>
                <h1>Hi, I'm <span className='name'>Weitao Wu.</span></h1>
                <span className='intro'>
                  I graduated from University of Calgary in 2023. I am an aspiring entry-level software developer with a fervent passion for exploring the realms of technology, particularly in the captivating field of artificial intelligence (AI). Eager to embark on a journey of continuous learning and growth, I am driven by an insatiable curiosity to delve deeper into the ever-evolving landscape of software development. I firmly believe that in today's fast-paced digital age, adaptability and a thirst for knowledge are key to staying ahead. As such, I am committed to continuously expanding my horizons, embracing emerging technologies, and collaborating with like-minded individuals to push the boundaries of what we can achieve.
                </span>
            </div>}
          </TrackVisibility>
        </div>
      </div>
      <hr />
      <div className='skills'>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? 'animate__animated animate__fadeIn' : 'notShowSkills'}>
              <h1>My Skills</h1>
              <div className='skillList'>
                <div className='list'>
                  <p>JAVA</p>
                  <p>C/C++</p>
                  <p>PYTHON</p>
                  <p>JAVASCRIPT</p>
                  <p>REACT</p>
                </div>
                <div className='list'>
                  <p>MYSQL</p>
                  <p>SPRING BOOT</p>
                  <p>GITHUB</p>
                  <p>AWS</p>
                  <p>DOCKER</p>
                </div>
              </div>
          </div>}
        </TrackVisibility>
        <hr />
      </div>
    </div>
  )
}
