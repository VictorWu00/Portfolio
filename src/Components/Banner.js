import React from 'react'
import TrackVisibility from 'react-on-screen';
import { TypeAnimation } from 'react-type-animation';
import 'animate.css';
import '../Styles/Banner.css'
import gitIcon from '../img/github.png'
import liIcon from '../img/linkedIn.png'
import resIcon from '../img/icons8-resume-50.png'
import res from '../Resume/WeitaoWu_RESUME.pdf'

export default function Banner() {
    return (
        <div className='banner' id='aboutMe'>
            <div className='greeting'>
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? 'animate__animated animate__fadeIn' : 'notShowGreeting'}>
                            <h1>WEITAO WU</h1>
                            <h2>I AM A</h2>
                        </div>}
                </TrackVisibility>
            </div>
            <div className='title'>
                <TypeAnimation sequence={[
                    'Junior Level', 2000,
                    'Software Developer',2000,
                ]} speed={20} repeat={Infinity} className='Title'></TypeAnimation>
            </div>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/weitao-wu-60a71b264/'><img src={liIcon} alt='linkedIn-logo'></img></a>
                <a href='https://github.com/VictorWu00'><img src={gitIcon} alt='github-logo'></img></a>
                <a href={res} download='WeitaoWu_Resume.pdf'><img src={resIcon} alt='resume-logo'></img></a>
            </div>
        </div>
    )
}
