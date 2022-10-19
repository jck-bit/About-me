import React from 'react'
import { useInView } from 'react-intersection-observer';
import './Footer.css'


const Footer = () => {
  const { ref, inView } = useInView({

    /* Optional options */

    threshold: 0.4,
  });
  return (
    <>
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
    </div>
      </>
  )
}

export default Footer