import React from 'react'
import "./MainPageSearch.css"
import { Badge } from '@material-ui/core';



export const SearchContainerHeaderLinks = () => {
    return (
        <>
        <div className = "first-word">All Jobs</div>
        <Badge style ={{marginTop: 10}} color = "secondary" badgeContent={"new"} > {<div style ={{color: "white"}}>Work From Home</div>} </Badge>
        <button>Covid-19 Resources</button>
        <div style ={{marginTop: 10}} >Contract Jobs</div>
        <div style ={{marginTop: 10}} >Fresher Jobs</div>
            
        </>
    )
}
