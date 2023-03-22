import React from "react";
import "./home_fourth_page.css";
import HFPVideos from "./hfp_videos/hfp_videos";

function HomeFourthPage(){
    return(
        <div className="hfourthp_outer">
            <div className="hfourthp_outer_mid">
                <div className="hfourthp_outer_mid_top">
                    <h3 className="hfourthp_outer_mid_top_heading">
                        Under Health Umbrella Foundation Initiative
                    </h3> 
                    <span className="hfourthp_outer_mid_top_text">Discover effective treatments through 
                        our curated video collection. From inspiring 
                        stories to trusted advice, gain valuable insights 
                        into the journey towards optimal health and wellness. 
                        Transform your life and take the first step towards 
                        a happier, healthier you.
                    </span>
                </div>
                <div className="hfourthp_outer_mid_bottom">
                    <HFPVideos/>
                    <HFPVideos/>
                    <HFPVideos/>
                </div>
            </div>
        </div>
    );
}

export default HomeFourthPage;