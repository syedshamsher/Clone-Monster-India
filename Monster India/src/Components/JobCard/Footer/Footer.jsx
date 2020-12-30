import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShareIcon from '@material-ui/icons/Share';
import styles from '../style.module.css';

export function Footer({jobs}) {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.left}>
                Posted: {jobs.posted} days ago
            </div>
            <div className={styles.right}>
                <StarBorderIcon style={{ color: "#9B9B9B"}}/>
                <ShareIcon style={{ color: "#9B9B9B"}}/>
                <button>APPLY</button>
            </div>
        </div>
    )
}
