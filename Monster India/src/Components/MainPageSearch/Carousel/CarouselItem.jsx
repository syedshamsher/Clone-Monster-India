import React from 'react'
import styles from "./Carousel.module.css"

export const CarouselItem = ({data}) => {

    console.log(data)

    
    return (
        <>
          <h4>{data.company_name}</h4>
          <p>{data.function} </p>
          <p>Experience:{data.experience}</p>
          <p>location:{data.location } </p>
        </>
        
    )
}


// <div className = {styles.cardContainer} >
            
        //        hiii
                  
        // </div>