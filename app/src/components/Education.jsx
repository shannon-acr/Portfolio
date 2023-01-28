import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBook, faClock} from '@fortawesome/free-solid-svg-icons'

function Education(){
	return( 
		  <div className="education" id="education">
        	<h2>Education</h2><span></span>
        	<div className="edu">
	            <span className="course"><FontAwesomeIcon className = "icon" icon={faBook}/>
	                BSc. Computer Science</span>
	            <span className="school"><FontAwesomeIcon className = "icon" icon={faGraduationCap}/>
	                Villanova University, PA</span>
	            <span className="date"><FontAwesomeIcon className = "icon" icon={faClock}/>
	                Aug 2016 - May 2020</span>
	            <ul className="description">
	            	<li> Magna cum laude: GPA 3.8 </li>
	           		<li> Member of Upsilon Pi Epsilon: International Honor Society for the Computing and Information Disciplines</li>
	            	<li> Recipient of the Freshman Match Research Program Award where I served as a research assistant for a study on student activism on college campuses</li>
	            	<li> Recipient of the Zawadi Africa Education Fund Scholarship </li>
            </ul>
        </div>

        <div className="edu">
            <span className="course"><FontAwesomeIcon className = "icon" icon={faBook}/>
               Study Abroad Semester Program in Computer Science</span>
            <span className="school"><FontAwesomeIcon className = "icon" icon={faGraduationCap}/>
                DIS Copenhagen, Copenhagen, Denmark</span>
            <span className="date"><FontAwesomeIcon className = "icon" icon={faClock}/>
                Jan 2019 - May 2019</span>
            <ul className="description">
	            	<li> Courses Taken: Game Development and Design, Introduction to Danish, Photojournalism, Innovation Through Design Thinking </li>
	           		<li><a href= "https://copenhagenadventures.home.blog/" target="_blank" className="website-link" rel="noopener noreferrer"> Student Blogger </a>for the Computer Science course </li>
	           		<li>Collaborated in a group for 4  students and used <a href= "https://medium.com/@shannonmakenna/design-thinking-5fd959fbcaaf" target="_blank" className="website-link" rel="noopener noreferrer"> Design Thinking </a>to creatively implement a toolbox of life skills that young adults require to navigate post-school life</li>
            </ul>
        </div>
    </div>
	)
}

export default Education;