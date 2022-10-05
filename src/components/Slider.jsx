import React from 'react'
import { useInView } from 'react-intersection-observer';
import './Slider.css'
import { pictures } from '../assets/images';

const Slider = ({imgSrc, title, subtitle,flipped}) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.4,
      });

    const renderContent = () =>{
        if (!flipped){
         return <>
            <img src={imgSrc} alt="Thats me" className='slider_img'/>
            <div className='slider_content'>
                <h1 className='slider_title'>{title}</h1>
                <p>{subtitle}</p>
                <p></p>
            </div>
          </>
        } if(flipped) {
            return <>
            <div className='slider_content'>
                <h1 className='slider_title'>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <div className="my__tecnologies">
              {pictures.map((picture) =>{
                return(
                  <>
                  <span>
                    <img src={picture.flask_logo} alt="Thats me" className='span_img'/>
                 </span>
                 <span>
                   <img src={picture.python_logo} alt="flask" className='span_img'/>
                 </span>
                 <span>
                    <img src={picture.js_logo} alt=""  className='span_img'/>
                 </span>
                 <span>
                   <img src={picture.react_logo} alt=""  className='span_img'/>
                 </span>
                 <span>
                   <img src={picture.git_logo} alt=""  className='span_img'/>
                 </span>
                 <span>
                   <img src={picture.html_logo} alt="" className='span_img' />
                 </span>
                 <span>
                   <img src={picture.css_logo} alt="" className='span_img' />
                 </span>
                 <span>
                   <img src={picture.sass_logo} alt="" className='span_img' />
                 </span>
                 <span>
                   <img src={picture.postman_logo} alt="" className='span_img' />
                 </span>
                 <span>
                   <img src={picture.sql_logo} alt="" className='span_img' />
                 </span>
                 <span>
                   <img src={picture.nodejs_logo} alt="" className='span_img' />
                 </span>
                  </>
                )
              })}
            </div>
            </>
        } 
    }


  return (
    <>
       <div className={ inView ? "slider slider--zoom" : "slider" } ref={ref}>
        {renderContent()}
    </div>
    </>

  )
}

export default Slider