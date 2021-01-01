import { Button} from '@material-ui/core'
import React from 'react'
import styles from "../MainPageStyles.module.css"
import {Header} from "../Carousel/Header"

export const JobVacancyContainer = () => {
    return (
        <div style = {{background: "white", padding: 30}} >
            <h2 style = {{textAlign: "left"}} > Find Job Vacancies by </h2>
            <div className = {styles.job_vacancy_wrapper}>
                <div className = {styles.job_vacancy_header_links} >
                <button style = {{color: "white", background: "#5D50A6", height: 45, width: 120, borderRadius: 5, fontSize: 15}} > Skills</button>
                    <div>Location</div>
                    <div>Industry</div>
                    <div>Functions</div>
                    <div>Roles</div>
                    <div>Company</div>

                </div>

                <div className = {styles.skills_links_grid} style= {{textAlign: "left", marginLeft: 16, marginTop: 50}} >
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
                <div style = {{marginTop: 30, color: "#5D50A6"}} className = {styles.right_child} > Browse all jobs by skills</div>
            </div>
            
        </div>
    )
}
