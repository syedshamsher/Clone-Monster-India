import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobData } from "../../../Redux/JobSearch/action";
import { CarouselItem } from "./CarouselItem";
import styles from "./Carousel.module.css";
import Carousel from 'react-elastic-carousel';
import {Header } from "./Header"
import { ViewAllTag } from "./ViewAllTag";
export const CarouselContainer = ({breakPoints}) => {
    const jobData = useSelector((state) => state.jobs.jobs);
    const dispatch = useDispatch();

    // const breakPoints = [
    //     { width: 1, itemsToShow: 1 },
    //     { width: 550, itemsToShow: 2 },
    //     { width: 768, itemsToShow: 3 },
    //     { width: 1200, itemsToShow: 3 }
    //   ];

    React.useEffect(() => {
        dispatch(getJobData());
    }, []);

   
    
    return (
        <div className= {styles.carousel_wrapper}>
            
            
            <div className = {styles.header} >
                {/* <div className = {styles.title}>Work From Home Jobs</div>  */}
                <Header heading = "work from home jobs"/>
                <ViewAllTag/>
               

            </div>
            {/* <div className = {styles.mainContainer}></div> */}

            <Carousel breakPoints={breakPoints}>{
                    jobData?.filter( (item) => item.job_type == "work from home" ).map( (item) => {
                        return(
                            <div  className = {styles.mainContainer}>
                                {
                                    <CarouselItem data = {item} />
                                }
                            </div>
                        )
                    })
               }
                
            </Carousel>

           
        </div>
    );
};
