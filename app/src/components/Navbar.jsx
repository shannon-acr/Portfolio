import React,{useState, useEffect} from "react";
import NavItems from './NavItems';
import BurgerMenu from './BurgerMenu';


function Navbar(){
	const [isDesktop, setDesktop] = useState(window.innerWidth > 480);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 480);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  })
		return(
			<div className = "navbar" id="navbar">
			<div className = "navbar-content">
				<div>SHANNON M. KARIUKI</div>
				{isDesktop ? <NavItems />: <BurgerMenu />}
			</div>
	  		</div>
		);
	
}
export default Navbar;