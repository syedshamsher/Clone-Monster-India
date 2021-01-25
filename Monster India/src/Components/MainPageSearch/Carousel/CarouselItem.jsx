import React from 'react'
import styles from "./Carousel.module.css"

export const CarouselItem = ({data}) => {
 
    return (
      <>
        <h4  style = {{marginTop: -10}}>{data.company_name}</h4>
        <p style = {{color: "grey", marginTop: -5}} >{data.function} </p>
        <p style = {{marginTop: -10}}>Experience:{data.experience}</p>
        <p  style = {{marginTop: -10}} >location:{data.location } </p>
      </>
    )
}


// <div className = {styles.cardContainer} >
            
        //        hiii
                  
        // </div>