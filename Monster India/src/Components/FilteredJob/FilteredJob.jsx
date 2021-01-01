import React from 'react'
import styles from './style.module.css'
import { useSelector } from 'react-redux'
import { Card } from '../JobCard/Card'
import { Footer } from '../JobCard/Footer'
import { useHistory } from "react-router-dom";

export const FilteredJob = () => {
    const filteredJobs = useSelector(state => state.filteredJobs)
    const history = useHistory()

    const goToJobDetails = (id) =>{
        history.push( `/job-details/${id}` )
    }
    return (
        <div>
             {
                    filteredJobs.jobs.length === 0 ?

                    <div> No Matches </div> :

                        filteredJobs.jobs?.map((item) => {
                            return (
                                <div key={item.job_id} className={styles.cardCont}>
                                    <div onClick={() => goToJobDetails(item.job_id)}>
                                      <Card jobs={item}/>
                                    </div>
                                    <Footer jobs={item}/>
                                </div>
                            )
                        }) 
                }
        </div>
    )
}
