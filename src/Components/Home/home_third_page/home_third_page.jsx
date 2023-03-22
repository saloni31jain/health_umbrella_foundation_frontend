import React from "react";
import "./home_third_page.css";
import HTPTestimonial from "./htp_testimonial/htp_testimonial";

function HomeThirdPage(){
    return(
        <div className="htp_outer">
            <div className="htp_outer_mid">
                <div className="htp_outer_mid_top">
                    <h2 className="htp_outer_mid_top_heading">Testimonials</h2>
                    <img src="./Images/123.png" alt="" />
                </div>
                <div className="htp_outer_mid_bottom">
                    <HTPTestimonial/>
                    {/* <HTPTestimonial/> */}
                </div>
            </div>
        </div>
    );
}

export default HomeThirdPage;