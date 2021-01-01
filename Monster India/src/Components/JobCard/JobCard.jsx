import React from 'react'
import { Card } from './Card'
import { Footer } from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getJobData } from '../../Redux/JobSearch/action'
import styles from './style.module.css';

export function JobCard() {
    const jobs = useSelector( state => state.jobs )
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch( getJobData() )
    },[])
    return (
        <div >
            {
                jobs.jobs?.map((item) => {
                    return (
                        <div className={styles.cardDiv} key={item.job_id}>
                            <Card jobs = {item}/>
                            <Footer jobs={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}
