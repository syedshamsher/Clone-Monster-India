import React from 'react'
import "./MainPageSearch.css"
import { Button  } from '@material-ui/core';

export const SearchBarContainer = () => {
    return (
        <>
            <img  className = "search_icon" alt = "search"  src ="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"/>
            <input className = "inputbox" placeholder = "Search by Skills, Company, Location" />
            <img className ="voice_search_icon" src = "https://cdn0.iconfinder.com/data/icons/communication-thin-part-1/100/1-16-512.png" alt = "voice icon"/>  
        
            <button style ={{background: "#5D50A6", borderRadius: "0px", border: "0px", height: 44, width: 120, color: "white", outline: "none", fontSize: 15, fontWeight: 700}} >Search</button> 
        </>
    )
}
