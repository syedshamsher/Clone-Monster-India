import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobData } from "../../../Redux/JobSearch/action";
import { CarouselItem } from "./CarouselItem";
import styles from "./Carousel.module.css";
import Carousel from "react-elastic-carousel";
import { Header } from "./Header";
import { ViewAllTag } from "./ViewAllTag";
import { useHistory } from "react-router-dom";
export const CarouselContainer = ({ breakPoints }) => {
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
        <div className={styles.carousel_wrapper}>
            <div className={styles.header}>
                <Header heading="Work From Home Jobs" />
                <ViewAllTag />
            </div>

            <Carousel breakPoints={breakPoints} pagination = {false}>
                {jobData
                    ?.filter((item) => item.job_type.toLowerCase() == "work from home")
                    .map((item) => {
                        return (
                            <div key = {item.job_id} 
                                className={styles.mainContainer}
                                onClick={() => goToJobDetails(item.job_id)}
                            >
                                {<CarouselItem data={item} />}
                            </div>
                        );
                    })}
            </Carousel>
        </div>
    );
};
