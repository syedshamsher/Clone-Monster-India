import React from 'react'
import styles from "../Carousel.module.css"

export const RecentJobCarouselItem = ({data}) => {
    
    return (
        <>
        <h4 style ={{alignContent: "left", marginBottom: 3}} >{data.company_name}</h4>
        <p style = {{color: "darkgrey", marginBottom: 3}} >{data.function} </p>
        <p style = {{fontSize: 14, color: "#505050", marginBottom: 3}}>Experience: {data.experience}</p>
        <p style = {{fontSize: 14, color: "#505050"}} >Location: {data.location } </p>
        </>
        
    )
}


