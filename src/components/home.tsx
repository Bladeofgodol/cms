import React from "react";
import './home.css';

function Home() {
    return (

        <div>
            <div className="intro">
                <div className="introtext">
                    <h1>WELCOME TO OUR CUSTOMER MANAGEMENT WEBSITE</h1>
                    <p>This website is used to create, update, remove customer. It will help us to manage
                        our customer in more company more over it is easy to use  and user friendly
                    </p>
                </div>

                <div className="introimg">
                    <img className="introimgi" src={require('./images/introimgi.png')} />

                </div>
            </div>


            <div className="links">
                <div className="linktitle">
                    <h1>operations</h1>
                </div>

                <div className="operations">
                    <div className="operation">
                        <div className="operationimg">
                        <img className="introimgi" src={require('./images/introimgi.png')} />
                        </div>
                        <div className="operationname">
                            <h3>Register customer</h3>
                            
                        </div>
                    </div>


                    <div className="operation">
                        <div className="operationimg">
                        <img className="introimgi" src={require('./images/introimgi.png')} />
                        </div>
                        <div className="operationname">
                        <h3>View customer</h3>
                       
                        </div>
                    </div>
                </div>
            </div>


            <div className="about">
            <div className="abouttitle">
                    <h1>About us</h1>
                </div>
            </div>


            <div className="contact">

            </div>
        </div >

    );

}
export default Home;