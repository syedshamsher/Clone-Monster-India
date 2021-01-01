import { Button} from '@material-ui/core'
import React from 'react'
import styles from "../MainPageStyles.module.css"
import {Header} from "../Carousel/Header"

export const JobVacancyContainer = () => {
    return (
        <div >
            <Header heading = "Find Job Vacancies By" />
            <div className = {styles.job_vacancy_wrapper}>
                <div className = {styles.job_vacancy_header_links} >
                    <Button color = "primary" variant = "contained">skills</Button>
                    <div>Location</div>
                    <div>Industry</div>
                    <div>Functions</div>
                    <div>Roles</div>
                    <div>Company</div>

                </div>

                <div className = {styles.skills_links_grid}>
                        <div>Software Engineering</div>
                        <div>Bfsi</div>
                        <div>Banking</div>
                        <div>Insurance</div>
                        <div>Bancasrance</div>
                        <div>Direct Sales</div>
                        <div>Sales</div>
                        <div>Bpo</div>
                        <div>Java</div>
                        <div>Life Insurance</div>
                        <div>agency</div>
                        <div>Bank Office</div>
                </div>
                <div className = {styles.right_child} > browse all jobs by skills</div>
            </div>
            
        </div>
    )
}
