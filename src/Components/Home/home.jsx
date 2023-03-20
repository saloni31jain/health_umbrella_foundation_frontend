import React from "react";
import "./home.css";
import HomeFirstPage from "./home_first_page/home_first_page";
import HomeFourthPage from "./home_fourth_page/home_fourth_page";
import HomeSecondPage from "./home_second_page/home_second_page";
import HomeThirdPage from "./home_third_page/home_third_page";
import Searchbar from "./searchbar/searchbar";

function Home(){
    return(
        <div>
            <HomeFirstPage className="homefirstpage"/>
            <HomeSecondPage className="homesecondpage"/>
            <HomeThirdPage className="homethirdpage"/>
            <HomeFourthPage className="homefourthpage"/>
        </div>
    );
}

export default Home;