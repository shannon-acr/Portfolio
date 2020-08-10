import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { faFileDownload} from '@fortawesome/free-solid-svg-icons'
import resume from "../assets/resume/Shannon M. Kariuki_Resume.pdf"

function About(){
	return (
		<div className= "about" id="about">
				<img
				  className= "avatar"
	              src= {require('../profilepic.png')}
	              alt="avatar"
	               />
	     <section className = "aboutText"> 
	     	<h2> About Me </h2><span></span>
        <p className ="summary">Software Engineer | Educator </p>
	     	 <p>
              I am a recent computer science graduate from Villanova University actively looking for software/web developer roles
               As I start my career, I am excited to bring my skills in building responsive, user-friendly,
               secure, and accessible websites and applications to the company I work for
              I love being in tech because it challenges me to be a continuous learner. 
              I am currently learning React JS and Vue JS </p>
              <br/>
              <p>I am also passionate about mentoring and encouraging young kids to learn how to code. Throughout my time at Villanova, I actively served as a lead coordinator for the coding club at St. Francis De Sales School in West Philadelhia 
              where we introduced the students to programming using platforms such as Scratch and Processing. I recently cofounded an online education service to introduce Kenyan high school students the basics of programming and spark interest in a career in tech  
               </p> 
               <section className ="social-media">
                <a
       				 href="https://github.com/shannonkar" target="_blank">
        			<FontAwesomeIcon icon={faGithub} size="2x"  className="icon"/>Github
     		 </a> 
     		  <a
       				 href="www.linkedin.com/in/shannon-makenna-kariuki/"  target="_blank">
        			<FontAwesomeIcon icon={faLinkedin} size="2x" className="icon"/>LinkedIn
     		 </a> 
     		  <a
       				 href={resume} target="_blank">
        			<FontAwesomeIcon icon={faFileDownload} size="2x" className="icon"/>Resume
     		 </a>
     		 <a
       				 href="https://medium.com/@shannonmakenna" target="_blank">
        			<FontAwesomeIcon icon={faMedium} size="2x" className="icon" />Medium
     		 </a>  
     		 </section>
	     </section>

		</div>
		)
}
export default About;