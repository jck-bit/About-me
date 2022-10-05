import React from 'react'
import { useInView } from 'react-intersection-observer';
import { pictures } from '../assets/images';
import './Footer.css'

const Footer = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  return (
    <div className={inView ? "education__container--zoom" : "education__container" } ref={ref}>
      <h1>Education</h1>
      <p>University Of Nairobi(UON) (2020- )</p>

      <h2>Faculty:</h2>
      <p className='faculty__name'>
        Arts and social Sciences
      </p>
      <h3>Speciality</h3>
      <p className='speciality__name'>
        BAchelor of Economics
      </p>

      <div className="contacts_float_right">
        <h2>Contacts</h2>
        {pictures.map((picture) =>{
          return(
            <ul>
              <li>
                <a href="https://wakatime.com/@spinach">
                  <img src={picture.wakatime_logo} alt="" className='footer_img'/>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/KinyanjuiJack1">
                  <img src={picture.twitter_logo} alt="" className='footer_img'/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jack-kinyanjui-53291624b/">
                  <img src={picture.linkedin_logo} alt="" className='footer_img'/>
                </a>
              </li>
              <li>
                <a href="https://github.com/jck-bit">
                  <img src={picture.github_logo} alt="" className='footer_img'/>
                </a>
              </li>
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default Footer