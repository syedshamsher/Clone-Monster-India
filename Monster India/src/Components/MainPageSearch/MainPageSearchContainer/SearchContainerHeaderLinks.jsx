import React from 'react'
import "./MainPageSearch.css"
import { Badge } from '@material-ui/core';



export const SearchContainerHeaderLinks = () => {
    return (
        <>
        <div className = "first-word">All Jobs</div>
        <Badge color = "secondary" badgeContent={"new"} > {<div>Work From Home</div>} </Badge>
        <button>covid-19 Resources</button>
        <div>Contract Jobs</div>
        <div>Fresher Jobs</div>
            
        </>
    )
}
