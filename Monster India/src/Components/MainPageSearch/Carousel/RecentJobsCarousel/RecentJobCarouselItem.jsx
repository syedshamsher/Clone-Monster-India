import React from 'react'
import styles from "../Carousel.module.css"

export const RecentJobCarouselItem = ({data}) => {
    
    return (
        <>
         <h4>{data.company_name}</h4>
          <p>{data.function} </p>
          <p>Experience:{data.experience}</p>
          <p>venue:{data.location } </p>
        </>
        
    )
}


