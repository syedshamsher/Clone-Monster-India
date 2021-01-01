import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShareIcon from '@material-ui/icons/Share';
import styles from '../style.module.css';
import { useHistory } from 'react-router-dom';

export function Footer({jobs}) {
    // console.log( jobs )
    const history = useHistory()

    const handleClick = (id) => {
        history.push(`/applied/${id}`)
    }
    
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.left}>
                Posted: {jobs.posted} days ago
            </div>
            <div className={styles.right}>
                <StarBorderIcon style={{ color: "#9B9B9B"}}/>
                <ShareIcon style={{ color: "#9B9B9B"}}/>
                <button onClick = {() => handleClick(jobs.job_id)} >APPLY</button>
            </div>
        </div>
    )
}
