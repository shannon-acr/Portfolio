import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUsers, faBuilding} from '@fortawesome/free-solid-svg-icons'

function Leadership(){
	return( 
		  <div className="leadership" id="leadership">
        	<h2>Leadership</h2><span></span>
        	<div className="org">
	            <span className="role"><FontAwesomeIcon className = "icon" icon={faUsers}/>
	              Co-Founder & Web Development Instructor</span>
	            <span className="company"><FontAwesomeIcon icon={faBuilding} className = "icon" />
	                STEAM-LAB KENYA, Nairobi, KE</span>
	            <span className="date"><FontAwesomeIcon icon={faClock} className = "icon"/>
	                June 2020 – Present</span>
	            <ul className="description">
	            	<li> Developed and maintain the  <a href= "http://www.steamlabke.com/" target="_blank" className="website-link"  rel="noopener noreferrer"> STEAM-LAB-KENYA website </a> </li>
	           		<li>Conduct bi-weekly web development zoom lessons with 10 high school students </li>
	            </ul>
        </div>


        <div className="org">
	            <span className="role"><FontAwesomeIcon className = "icon" icon={faUsers}/>
	              Lead Coordinator of Coding Club</span>
	            <span className="company"><FontAwesomeIcon icon={faBuilding} className = "icon" />
	                St. Francis De Sales, Philadelphia, PA</span>
	            <span className="date"><FontAwesomeIcon icon={faClock} className = "icon"/>
	                FEB 2018 – MAR 2020</span>
	            <ul className="description">
	            	<li> Led a team of Villanova student volunteers to help run a coding club in St. Francis de Sales School </li>
	           		<li> Taught students how to build computer games using Scratch, build programs using Java and Processing, and how to create personal biographies using HTML and CSS</li>
	            </ul>
        </div>
    </div>
	)
}
export default Leadership;