import React, { useState } from "react";
import "./searchbar.css";
import { useNavigate, NavLink } from 'react-router-dom';



function SearchBar() {
    const searchData = ["diabetes", "psoriasis", "cancer", "d", "di", "can", "migrane", "a", "aaaa"];

    const [resultData, setResultData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const searchInputData = String(event.target.value).toLowerCase();
        setSearchInput(String(event.target.value).toLowerCase());
        if (searchInputData === "") {
            setResultData([]);
        } else {
            let newresultdata = searchData.filter((value) => {
                return value.includes(searchInputData);
            });
            setResultData(newresultdata);
        }
    }

    const handleClick = () => {
        navigate(`/diseases/${searchInput}`);
    }


    return (
        <div className="searchbar_container">
            <div className="searchbar_outer">
                <input placeholder="Search by Disease" type="text" className="searchbar_outer_input"
                    onChange={handleChange}
                />
                <button className="searchbar_outer_button1" onClick={handleClick}>Search</button>
                <button className="searchbar_outer_button2" onClick={handleClick}><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>

            {resultData.length !== 0 && <div className="dataResult">
                {resultData.slice(0, 5).map((value) => {
                    return <NavLink className="dataItem" to={`/diseases/${value}`} key={value}>{value}</NavLink>
                })}
            </div>}
        </div>

    );
}

export default SearchBar;