import React from 'react'
import styles from "../Carousel.module.css"

export const WalkInCarouselItem = ({data}) => {
    
    return (
        <>
         <h4>{data.company_name}</h4>
          <p>{data.function} </p>
          <p>Experience:{data.experience}</p>
          <p>Date: 02 - jan 2021</p>
          <p>venue:{data.location } </p>

        </>
        
    )
}


// <div className = {styles.cardContainer} >
            
        //        hiii
                  
        // </div>