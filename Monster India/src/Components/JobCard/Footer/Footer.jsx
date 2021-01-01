import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShareIcon from '@material-ui/icons/Share';
import styles from '../style.module.css';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

export function Footer({jobs}) {
    // console.log( jobs )
    let history = useHistory();
    const isAuth = useSelector((state) => state.auth.isAuth);

    const handleApply = () => {
        if(isAuth){
            history.push(`/applied/${jobs.job_id}`);
            console.log(isAuth)
        }else
        {
            history.push("/loginpage");
            console.log(isAuth)
        }
    }
    console.log(isAuth)
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.left}>
                Posted: {jobs.posted} days ago
            </div>
            <div className={styles.right}>
                <StarBorderIcon style={{ color: "#9B9B9B"}}/>
                <ShareIcon style={{ color: "#9B9B9B"}}/>
                <button onClick={()=>handleApply()}>APPLY</button>
            </div>
        </div>
    )
}
