import React from 'react'
import styles from "../Carousel.module.css"

export const RecentJobCarouselItem = ({data}) => {
    
    return (
        <>
        <h4 style ={{alignContent: "left", marginBottom: 10}} >{data.company_name}</h4>
        <p style = {{color: "darkgrey", marginBottom: 5}} >{data.function} </p>
        <p style = {{fontSize: 14, color: "#505050", marginBottom: 5}}>Experience: {data.experience}</p>
        <p style = {{fontSize: 14, color: "#505050"}} >Location: {data.location } </p>
        </>
        
    )
}


