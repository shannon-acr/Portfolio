import React from 'react';
import html5 from "../assets/images/html5.svg";
import css from "../assets/images/css.svg";
import java from "../assets/images/java.svg";
import mysql from "../assets/images/mysql.svg";
import react from "../assets/images/react.svg";
import vue from "../assets/images/vue.svg";
import redux from "../assets/images/redux.svg";

const Technologies = () => (
<div className = "technologies" id = "technologies">
	<h2>Tech Skills </h2>
	<span></span>
	<div className="content">
		<div className="skills_one"> 
	    <div className="skills_images"> 
	    	<img alt ="java" src ={java} className= "skills_image"/>
	    	<img alt ="react"  src ={react} className= "skills_image"/>
	    	<img alt ="html5" src ={html5} className= "skills_image"/>
	    	<img alt ="css" src ={css} className= "skills_image"/>
	    	<img alt ="mysql" src ={mysql} className= "skills_image"/>
	    	<img alt ="redux" src ={redux} className= "skills_image"/>
	    	<img alt ="typescript" src ={vue} className= "skills_image"/>
	    </div>
	   </div>                          
     </div>

 </div>
)
export default Technologies
