import React from 'react';
import Header from './Header.jsx'
import module from './Search.module.scss'
import Search_icon from '../assets/Search.png'
function Search(props) {
    return (
        <div>
            {/* <Header/> */}
            <div className={module.search}> <img src={Search_icon}></img>  <input type="text" name="login" placeholder="поиск ..."/> </div>
        </div>
    );
}

export default Search;