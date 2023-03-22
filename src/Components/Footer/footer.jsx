import React from "react";
import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_upper">
                <div className="footer_upper_top">
                    <div className="follow-us">
                        <h4>Follow Us</h4>
                        <p>We would like to stay connected with you and keep you updated on
                            all the latest testimonials of different diseases. That's why we invite
                            you to follow our social media handles.</p>
                        <div className="follow-us_links">
                            <a href="https://www.instagram.com" target="_blank"><img src="./Images/Instagram.png" alt="" /></a>
                            {/* <a href="#"><img src="./Images/Dribbble.png" alt="" /></a> */}
                            <a href="https://www.twitter.com/" target="_blank"><img src="./Images/Twitter.png" alt="" /></a>
                            <a href="https://www.youtube.com/" target="_blank"><img src="./Images/Youtube.png" alt="" /></a>
                        </div>
                    </div>

                    <div className="quick-links">
                        <h4>Quick Links</h4>
                        <div className="quick-links_container">
                            <div className="quick-links_container-1">
                                <a href="#">Home</a>
                                <a href="#">About</a>
                                <a href="#">Members</a>
                                <a href="#"><span>Donate Us</span></a>
                            </div>
                            <div className="quick-links_container-2">
                                <a href="#">Newsletter</a>
                                <a href="#">Feedback</a>
                                <a href="#">Join Us</a>
                            </div>
                        </div>


                    </div>

                    <div className="reach-us">
                        <h4>Reach Us</h4>
                        <p><img src="./Images/location.png" alt="" /><span>hello@HealthUmbrella.com</span></p>
                        <p><img src="./Images/Mobile.png" alt="" /><span>0522-2981000</span></p>
                        <p><img src="./Images/Location.png" alt="" /><span>NGO Office</span></p>

                    </div>
                </div>
                
                <div className="footer_upper_bottom">
                    <p>Terms & Conditions | Privacy Policy</p>
                </div>

            </div>

        <div className="footer_lower">
                <p><span>Disclaimer:</span> This website does not provide medical advice.</p>
                <p>The information, including but not limited to text, graphics, images and other material content on the website are for informational purposes only, no material on the site is intended to be a substitute for professional medical advice, diagnosis or treatment.</p>
            </div>
        </div>
    )

}
export default Footer;