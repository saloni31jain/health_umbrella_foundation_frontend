import React from "react";
import "./home.css";
import HomeFirstPage from "./home_first_page/home_first_page";
import HomeSecondPage from "./home_second_page/home_second_page";
import Searchbar from "./searchbar/searchbar";

function Home(){
    return(
        <div>
            <HomeFirstPage className="homefirstpage"/>
            <HomeSecondPage className="homesecondpage"/>
        </div>
    );
}

export default Home;