import React from 'react'
import "./MainPageSearch.css"
import { Button  } from '@material-ui/core';

export const SearchBarContainer = () => {
    return (
        <>
            <img  className = "search_icon" alt = "search"  src ="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"/>
            <input className = "inputbox" placeholder = "search by skills,location" />
            <img className ="voice_search_icon" src = "https://cdn0.iconfinder.com/data/icons/communication-thin-part-1/100/1-16-512.png" alt = "voice icon"/>  
        
            <Button color = "primary" variant = "contained">search</Button> 
        </>
    )
}
