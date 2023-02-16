import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import introimage from './images/introimage.svg';
import registerimage from './images/registerimage.svg';
import viewimage from './images/viewimage.svg';
import aboutimage from './images/aboutimage.svg';
function Home() {
    return (

        <div>
            <div className="intro">
                <div className="introtext">
                    <h1 className="greeting">WELCOME TO OUR CUSTOMER MANAGEMENT WEBSITE</h1>
                    <p className="description">
						This website is used to create, update, remove customer. It will help us to manage
                        our customer in more company more over it is easy to use  and user friendly
                    </p>
                </div>

                <div className="introimg">
                    <img className="introimage" src={introimage} alt=""/>
                </div>
            </div>


            <div className="links">
                <div className="linktitle">
                    <h1>operations</h1>
                </div>

                <div className="operations">
                <Link to="/register">
                <button className="operation">
                        <div className="operationimg">
                            <img className="operationimage" src={registerimage} alt=""/>
                        </div>
                        <div className="operationname">
                            <h3>Register customer</h3>
                            
                        </div>
                    </button>
				</Link>
                    

                <Link to="/view">
                    <button className="operation">
                        <div className="operationimg">
                            <img className="operationimage" src={viewimage} alt=""/>
                        </div>
                        <div className="operationname">
							<h3>View customer</h3>
                       
                        </div>
                        </button>
                </Link>
                </div>
            </div>


            <div className="about">
				<div className="abouttitle">
                    <h1>About us</h1>
				</div>
				<div className="aboutcontents">
					<div className="aboutcontentimg">
                        <img className="aboutimg" src={aboutimage} alt="" />
					</div>
					<div className="aboutcontenttext">
						<p>
							We are a team of interns from the American College of Technology, a prestigious institution dedicated to providing students with the skills and knowledge they need to succeed in the tech industry.
						</p>
						<br />
						<p>
							Our website was built by a group of dedicated interns who are passionate about using technology to improve customer experiences. We believe that effective customer management is essential for businesses to thrive, and we are committed to helping our clients achieve success through our innovative solutions.
						</p>
						<br />
						<p>
							We are constantly learning and staying up-to-date with the latest developments in the tech industry, and we are always looking for new ways to improve and enhance our services. We are grateful for the opportunity to work on this project and contribute to the success of our clients.Thank you for choosing our customer management website. We look forward to working with you and helping your business achieve its goals
						</p>
					</div>
				</div>
				
            </div>


            <div className="contact">

            </div>
        </div >

    );

}
export default Home;
