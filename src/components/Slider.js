import React from 'react'
import { useInView } from 'react-intersection-observer';
import './Slider.css'

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
            </div>
          </>
        }else{
            return <>
            <div className='slider_content'>
                <h1 className='slider_title'>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <img src={imgSrc} alt="Thats me" className='slider_img'/>
            </>
        }
    }
  return (
    <div className={ inView ? "slider slider--zoom" : "slider" } ref={ref}>
        {renderContent()}
    </div>
  )
}

export default Slider