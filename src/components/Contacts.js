import React from 'react'
import { pictures } from '../assets/images'


const Contacts = () => {
  return (
      <div className="contacts_float_right">
        <h3>My contacts</h3>
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
  )
}

export default Contacts