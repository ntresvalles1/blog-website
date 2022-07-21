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
            and all the other Five College Consortium Schools. The E-board's, also known
            as the "GG-Board", sole purpose is to ensure all our members have access to 
            the resources Smith College provides for data science students, as well as gather 
            outside resources and conferences that might peak the members' interest. 
            By having events, such as Networking with Alumni and Github Workshops, the GG-Board
            hopes they have opened opportunities and interests for the organization's members. 

        </div>
        <div className='aboutInfo'>
          If there are any other ideas, please let the GG-Board know by sending an email, Instagram DM,
          or sending this 
          <a style={{textDecoration: 'none', color: 'black'}} href="https://www.instagram.com/sdsccsmith/"> anonymous Google form. </a>
        </div>
    </div>
  )
}
