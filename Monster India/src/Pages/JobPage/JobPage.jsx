import React from "react";
import styles from "./style.module.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import WorkIcon from "@material-ui/icons/Work";
import ShareIcon from "@material-ui/icons/Share";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function JobPage(props) {
  console.log( props.data )
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div>
          <div className={styles.profileName}>
            {props.data.profile_name}
          </div>
          <div className={styles.companyName}>
            {props.data.company_name}
          </div>
          <div className={styles.locExpSal}>
            <div className={styles.locExpSalChild}>
              <LocationOnIcon style={{ color: "#9B9B9B" }} />
              <div>{props.data.location}</div>
            </div>
            <div className={styles.locExpSalChild}>
              <WorkIcon style={{ color: "#9B9B9B" }} />
              <div>{props.data.experience}</div>
            </div>
            <div className={styles.locExpSalChild}>
              <LocalAtmIcon style={{ color: "#9B9B9B" }} />
              <div>{props.data.salary}</div>
            </div>
          </div>
          <div className={styles.description}>{props.data.description}</div>
          <div className={styles.skills}>
            Skills: <span>{props.data.skills}</span>
          </div>
        </div>

        <div className={styles.right}>
          <StarBorderIcon style={{ color: "#9B9B9B" }} />
          <ShareIcon style={{ color: "#9B9B9B" }} />
          <button className={styles.applyBtn}>Apply</button>
        </div>
      </div>

      <div styles={{ backgroundColor: "#FFFFFF" }}>
        <span className={styles.postDetails}>
          <span>PostedOn:{props.data.posted} | </span>
          <span>Total Views: {props.data.total_views} | </span>
          <span>Total Application: {props.data.total_applicants} | </span>
          <span>Job ID: {props.data.job_id}</span>
        </span>
      </div>

      <div className={styles.main}>
        <h4>JOB DESCRIPTION</h4>
        <p>
          <span>
            {props.data.job_description}
            <br />
            <span>Experience : {props.data.experience}</span>
            <br />
            <span>Walk-IN-INTERVIEW:{props.data.walk_in_interview_date}</span>
            <br />
            <span>Contact Number : {props.data.contact_no}</span>
            {/* <span>Email-Id : {props.data.}</span> */}
          </span>
        </p>
      </div>

      <div className={styles.main}>
        <h2>Job Details</h2>
        <span>
          <h5>Industry : {props.data.industry}</h5>
        </span>

        <span>
          <h5>Function : {props.data.function}</h5>
        </span>

        <span>
          <h5>Roles : {props.data.roles}</h5>
        </span>

        <span>
          <h5>Skills : {props.data.skills}</h5>
        </span>

        <span>
          <h5>Education : {props.data.qualifications}</h5>
        </span>
      </div>

      <div className={styles.main}>
        <h2>About Recruiter</h2>
        <span>Functions : {props.data.function}</span>
        <br />
        <span>Industries : {props.data.industry}</span>
        <br />
        <span>Skills : {props.data.skills}</span>
        <br />
        <span>Roles : {props.data.role}</span>
      </div>
    </div>
  );
}

export {JobPage};
