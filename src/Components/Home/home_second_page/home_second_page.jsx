import React from "react";
import "./home_second_page.css";

function HomeSecondPage(){
    return(
        <div className="hsp_outer">
            <div className="hsp_outer_mid">
                {/* remove this down div for breakage */}
                <div className="hsp_outer_mid_left"> 
                    <img src="./Images/maskgroup.png" alt="" className="hsp_outer_mid_left_image"/>
                </div>
                <div className="hsp_outer_mid_right">
                    <h1 className="hsp_outer_mid_right_heading">Our Mission</h1>
                    <span className="hsp_outer_mid_right_text">The Internet contains 
                    huge amounts of data in the form of
                     testimonials of patients in the form of ebooks, websites, 
                     YouTube videos, articles which are scattered, unverified and 
                     unorganised.</span>
                     <button className="hsp_outer_mid_right_button">Read More</button>
                </div>
            </div>
        </div>
    );
}

export default HomeSecondPage;