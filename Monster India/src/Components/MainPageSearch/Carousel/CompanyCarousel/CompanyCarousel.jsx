import React from 'react'
import data from "./companyImages.json"
import Carousel from "react-elastic-carousel";
import styles from "../Carousel.module.css"
import {Header} from "../Header"

export const CompanyCarousel = ({breakPoints}) => {
    console.log(data," images data")
    return (
        <div className = {styles.carousel_wrapper} >
            <div className = {styles.header} >
                <Header heading = "Employers Of Choice"/>
               
            </div>
            <Carousel
            breakPoints={breakPoints}
            enableAutoPlay={true}
            autoPlaySpeed={2000}
            pagination={false}>
                {
                    data.map( (item) =>{
                        return(
                            <div className = {styles.companyImageContainer}>
                                <img src= {item.src} alt = "logo" style = {{ width: "100px"}}/>

                            </div>
                        )
                    })
                }
            
            </Carousel>
        </div>
    )
}
