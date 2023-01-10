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
				<button className="navbtn">HOME</button>
				<button className="navbtn">REGISTER</button>
				<button className="navbtn">VIEW</button>
				<button className="navbtn">ABOUT</button>
			</div>
		</div>
	);
}
export default Header;
