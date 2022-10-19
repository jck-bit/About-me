import { useInView } from 'react-intersection-observer';
import { pictures } from '../../assets/images'
import './contacts.css'

const Contacts = () => {
    const { ref, inView } = useInView({
    
        threshold: 0.4,
      });
  return (

    <div className={inView? "contacts_float_right--zoom": "contacts_float_right"} ref={ref}>
    <h2>Contacts</h2>
    {pictures.map((picture) =>{
      return(
        <ul>
          <li>
            <a href="https://wakatime.com/@Kinyanjui_jack">
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