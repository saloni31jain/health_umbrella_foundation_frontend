import React from "react";
import "./searchbar.css";

function SearchBar(){
    return(
        <div className="searchbar_outer">
            <input placeholder="Search by Disease" type="text" className="searchbar_outer_input"/>
            <button className="searchbar_outer_button">Search</button>
        </div>
    );
}

export default SearchBar;