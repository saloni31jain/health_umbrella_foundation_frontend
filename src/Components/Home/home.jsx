import React from "react";
import "./home.css";
import HomeFifthPage from "./home_fifth_page/home_fifth_page";
import HomeFirstPage from "./home_first_page/home_first_page";
import HomeFourthPage from "./home_fourth_page/home_fourth_page";
import HomeSecondPage from "./home_second_page/home_second_page";
import HomeThirdPage from "./home_third_page/home_third_page";

function Home(){
    return(
        <div>
            <HomeFirstPage className="homefirstpage"/>
            <HomeSecondPage className="homesecondpage"/>
            {/* This was commented because it is work in progress */}
            {/* <HomeThirdPage className="homethirdpage"/> */}
            <HomeFourthPage className="homefourthpage"/>
            <HomeFifthPage className="homefifthpage"/>
        </div>
    );
}

export default Home;