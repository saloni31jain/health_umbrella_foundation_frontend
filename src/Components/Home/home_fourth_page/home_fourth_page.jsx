import React from "react";
import "./home_fourth_page.css";
import HFPVideos from "./hfp_videos/hfp_videos";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide:3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 3,
      slidesToSlide:3,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide:1,
    }
};

function HomeFourthPage(){
    return(
        // <div className="hfourthp_outer">
        //     <div className="hfourthp_outer_mid">
        //         <div className="hfourthp_outer_mid_top">
        //             <h3 className="hfourthp_outer_mid_top_heading">
        //                 Under Health Umbrella Foundation Initiative
        //             </h3> 
        //             <span className="hfourthp_outer_mid_top_text">Discover effective treatments through 
        //                 our curated video collection. From inspiring 
        //                 stories to trusted advice, gain valuable insights 
        //                 into the journey towards optimal health and wellness. 
        //                 Transform your life and take the first step towards 
        //                 a happier, healthier you.
        //             </span>
        //         </div>
        //         <div className="hfourthp_outer_mid_bottom">
        //             <div className="hfourthp_outer_mid_bottom1">
        //                 <HFPVideos/>
        //                 <HFPVideos/>
        //                 <HFPVideos/>
        //             </div>
        //             <div className="hfourthp_outer_mid_bottom2">
        //                 <HFPVideos/>
        //                 <HFPVideos/>
        //                 <HFPVideos/>
        //             </div>
        //         </div>
        //     </div>
        // </div>
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
                <Carousel responsive={responsive} 
                autoPlaySpeed={4000} 
                infinite={true} 
                autoPlay={true}
                swipeable={true}
                // showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
                    <HFPVideos/>
                    <HFPVideos/>
                    <HFPVideos/>
                    <HFPVideos/>
                    <HFPVideos/>
                    <HFPVideos/>
                </Carousel>
            </div>
        </div>
    );
}

export default HomeFourthPage;