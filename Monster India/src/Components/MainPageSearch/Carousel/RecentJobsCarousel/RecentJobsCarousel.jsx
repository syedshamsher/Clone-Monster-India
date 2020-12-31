import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../Carousel.module.css";
import Carousel from 'react-elastic-carousel';
import {Header } from "../Header"
import {getJobData} from "../../../../Redux/JobSearch/action"
import {RecentJobCarouselItem} from "./RecentJobCarouselItem"

export const RecentJobsCarousel = ({breakPoints}) => {
    const jobData = useSelector((state) => state.jobs.jobs);
    const dispatch = useDispatch();

   

    React.useEffect(() => {
        dispatch(getJobData());
    }, []);

   
    
    return (
        <div className= {styles.carousel_wrapper}>
            
            <Header heading = "Recent Jobs"/>
            
            <Carousel breakPoints={breakPoints}>{
                    jobData?.map( (item) => {
                        return(
                            <div  className = {styles.mainContainer}>
                                {
                                    <RecentJobCarouselItem data = {item} />
                                }
                            </div>
                        )
                    })
               }
                
            </Carousel>
           
        </div>
    );
};
