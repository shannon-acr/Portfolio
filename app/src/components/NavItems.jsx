import React from "react";
import {Link} from "react-scroll";

function NavItems(){
		return(
			<div className="right-nav" >
					<ul className="navbar-items" >
					<li className="navbar-item" >
					<Link 
						activeClass = "active"
						to="about"
 						spy={true}
						offset={-70}
						duration = {500}
						className="nav-link"
						 smooth={true}
					>
				 		ABOUT
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="technologies"
					    smooth={true}
					>TECH SKILLS
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="projects"
						smooth={true}
					>
						PROJECTS
					</Link>
					</li>

					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="experience"
					    smooth={true}
					>
						EXPERIENCE
					</Link>
					</li>
					<li className="navbar-item">
					<Link
						activeClass = "active"
						to="education"
						smooth={true}
					>
						EDUCATION
					</Link>
					</li>
						<li className="navbar-item">
					<Link
						activeClass = "active"
						to="leadership"
						smooth={true}
					>
						LEADERSHIP
					</Link>
					</li>
				</ul>
			</div>
	  		
		);
	
}
export default NavItems	;