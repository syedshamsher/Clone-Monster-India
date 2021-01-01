import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { WalkInCarouselItem } from "./WalkInCarouselItem";
import styles from "../Carousel.module.css";
import Carousel from 'react-elastic-carousel';
import {Header } from "../Header"
import {getJobData} from "../../../../Redux/JobSearch/action"
import {ViewAllTag} from "../ViewAllTag"
import { useHistory } from "react-router-dom";

export const WalkInJobCarousel = ({breakPoints}) => {
    const jobData = useSelector((state) => state.jobs.jobs);
    const dispatch = useDispatch();

   const history = useHistory()

    React.useEffect(() => {
        dispatch(getJobData());
    }, []);

    const goToJobDetails = (id) =>{
        history.push( `/job-details/${id}` )
    }
   
    
    return (
        <div className= {styles.carousel_wrapper}>
            
            <div className = {styles.header} >
                <Header heading = "WalkIn Jobs"/>
                <ViewAllTag/>
            </div>
            
            <Carousel breakPoints={breakPoints}>{
                    jobData?.map( (item) => {
                        return(
                            <div  className = {styles.mainContainer} onClick = { () => goToJobDetails(item.job_id)}>
                                {
                                    <WalkInCarouselItem data = {item} />
                                }
                            </div>
                        )
                    })
                }
                
            </Carousel>
           
        </div>
    );
};
