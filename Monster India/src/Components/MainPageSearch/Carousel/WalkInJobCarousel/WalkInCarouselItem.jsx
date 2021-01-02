import React from 'react'
import styles from "../Carousel.module.css"

export const WalkInCarouselItem = ({data}) => {
    
    return (
        <>
        <h4 style ={{alignContent: "left", marginBottom: 3}} >{data.company_name}</h4>
        <p style = {{color: "darkgrey", marginBottom: 3}} >{data.function} </p>
        <p style = {{fontSize: 14, color: "#505050", marginBottom: 5}}>Experience: {data.experience}</p>
        <p style = {{fontSize: 14, color: "#505050"}} >Location: {data.location } </p>
        </>
        
    )
}


// <div className = {styles.cardContainer} >
            
        //        hiii
                  
        // </div>