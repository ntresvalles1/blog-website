import React from 'react'
import "./about.css";
import groupPhoto from './groupPhoto.JPG';

export default function About() {
  return (
    <div className='about'>
       <div className='aboutTitle'>
            About Smithies in SDS: Coalition of Color
       </div>
        <img
            className='aboutPhoto' 
            src={groupPhoto}
            alt=" "
        />
        <br/> <br/>
        <div className='aboutInfo'>
            Our organization focuses on building a community amongst students 
            of color pursuing studies in Statistics and Data Science in Smith College, 
            and all the other Five College Consortium Schools.
        </div>
        
    </div>
  )
}
