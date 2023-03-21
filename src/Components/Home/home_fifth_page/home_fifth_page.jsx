import React from "react";
import "./home_fifth_page.css";
import SearchBar from "../searchbar/searchbar";

function HomeFifthPage() {
    return (

        <div className="hfifthp">
            <div className="hfifthp_upper">
                <h3>Health Information for All, Everywhere</h3>
                <p>Health Umbrella Foundation is a movement to collect and summarize the testimonials of common people regarding various treatments and therapies. The organization aims to systematically arrange and verify feedback from different sources, including direct interviews,websites, magazines, and newspapers. This data can provide valuable insights to doctors and healthcare professionals regarding the effectiveness of treatments in real world scenarios</p>
            </div>
            <SearchBar />
            <div className="hfifthp_lower">
                <img src="./Images/Group 69.png" alt="" />
            </div>



        </div>
    )
}

export default HomeFifthPage;