import React from 'react'
import styles from '../style.module.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import WorkIcon from '@material-ui/icons/Work';

function Card({jobs}) {
    return (
        <div className={styles.wrapper}>
           <div className={styles.main}>
                <div className={styles.profileName}>
                    {jobs.profile_name}
                </div>
                <div className={styles.companyName}>
                    {jobs.company_name}
                </div>
                <div className={styles.locExpSal}>
                    <div className={styles.locExpSalChild}>
                        <LocationOnIcon style={{ color: "#9B9B9B", height: 20, marginRight: 0}}/>
                        <div style ={{marginRight: 140}}>
                        {jobs.location}
                        </div>
                    </div>
                    <div className={styles.locExpSalChild}>
                        <WorkIcon style={{ color: "#9B9B9B", height: 20}}/>
                        <div style = {{marginRight: 140}} >
                        {jobs.experience}
                        </div>
                    </div>
                    <div className={styles.locExpSalChild}>
                        <LocalAtmIcon style={{ color: "#9B9B9B", height: 20}}/>
                        <div style = {{marginRight: 100}} >
                        {jobs.salary}
                        </div>
                    </div>
                </div>
                <div style = {{textAlign: "left", marginBottom:10, marginLeft: 10}}>
                    {
                        jobs.job_description.map((item, index) => index < 2? (
                            <div>
                                {item}
                            </div>
                        ): "")
                    }
                </div>
                <div style = {{marginRight: 600, marginBottom: 10}} >
                Skills: <span>{jobs.skills}</span>
                </div>
            </div>
        </div>
    )
}

export { Card }
