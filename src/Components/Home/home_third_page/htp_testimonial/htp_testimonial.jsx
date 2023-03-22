import React from "react";
import "./htp_testimonial.css";
import "./htp_testimonial.scss";

function HTPTestimonial() {
    return (
        <div className="htpt_outer">
            <div className="htpt_outer_top">

                <div className="popover-wrapper">
                    <div className="popover-arrow arrow-south"></div>
                    <div className="popover-content">
                        <h4 className="htpt_outer_top_heading">My experience with Migraine</h4>
                        <span className="htpt_outer_top_text">I have been suffering from
                            migraine from 2 years. The treatment on the website helped me to cure it.
                            I have been suffering from migraine from 2 years. The treatment on the website helped me
                            to cure it.I have been suffering from migraine from 2 years. The treatment
                            on the website helped me to cure it.</span>
                    </div>
                </div>    
            </div>


            <div className="htpt_outer_mid">
                <img src="/Images/doc.png" alt="" />
                <div className="htpt_outer_bottom">

                    <span className="htpt_outer_bottom_name">
                        Sophia Nguyen
                    </span>
                    <span className="htpt_outer_bottom_location">
                        Rajasthan, India
                    </span>
                </div>
            </div>

        </div>
    );
}

export default HTPTestimonial;