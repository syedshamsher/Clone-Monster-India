import React from 'react'
import styles from "./Carousel.module.css";


export const Header = ({heading}) => {
    return (
        <>
            <div className = {styles.header} >
                <div className = {styles.title}>{heading}</div> 
                <a>view all</a>

            </div>
        </>
    )
}
