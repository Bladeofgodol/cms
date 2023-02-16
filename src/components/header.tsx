import * as React from "react";
import { Link } from "react-router-dom";

import './header.css';
const Header = () => {
	return (
		<div className="navbar">
			<div className="logo">
				CMS
				
			</div>
			
			<div className="navs">
				<Link to="/" className="navbtn">
					<button className="navbtn">HOME</button>
				</Link>
				<Link to="/register" className="navbtn">
					<button className="navbtn">REGISTER</button>
				</Link>	
					
				
				<Link to="/view" className="navbtn">
					<button className="navbtn">VIEW</button>
				</Link>
				
				<button className="navbtn">ABOUT</button>
			</div>
		</div>
	);
}
export default Header;
