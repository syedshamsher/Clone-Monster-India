import React from "react";
import styles from "./style.module.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import WorkIcon from "@material-ui/icons/Work";
import ShareIcon from "@material-ui/icons/Share";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function JobPage({ jobs }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div>
          <div className={styles.profileName}>
            {jobs.profile_name.toUpperCase()}
          </div>
          <div className={styles.companyName}>
            {jobs.company_name.toUpperCase()}
          </div>
          <div className={styles.locExpSal}>
            <div className={styles.locExpSalChild}>
              <LocationOnIcon style={{ color: "#9B9B9B" }} />
              <div>{jobs.location.toUpperCase()}</div>
            </div>
            <div className={styles.locExpSalChild}>
              <WorkIcon style={{ color: "#9B9B9B" }} />
              <div>{jobs.experience}</div>
            </div>
            <div className={styles.locExpSalChild}>
              <LocalAtmIcon style={{ color: "#9B9B9B" }} />
              <div>{jobs.salary}</div>
            </div>
          </div>
          <div className={styles.description}>{jobs.description}</div>
          <div className={styles.skills}>
            Skills: <span>{jobs.skills}</span>
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
          <span>PostedOn:{jobs.posted} | </span>
          <span>Total Views: {jobs.total_views} | </span>
          <span>Total Application: {jobs.total_applicants} | </span>
          <span>Job ID: {jobs.job_id}</span>
        </span>
      </div>

      <div className={styles.main}>
        <h4>JOB DESCRIPTION</h4>
        <p>
          <span>
            {jobs.job_description}
            <br />
            <span>Experience : {jobs.experience}</span>
            <br />
            <span>Walk-IN-INTERVIEW:{jobs.walk_in_interview_date}</span>
            <br />
            <span>Contact Number : {jobs.contact_no}</span>
            {/* <span>Email-Id : {jobs.}</span> */}
          </span>
        </p>
      </div>

      <div className={styles.main}>
        <h2>Job Details</h2>
        <span>
          <h5>Industry : {jobs.industry}</h5>
        </span>

        <span>
          <h5>Function : {jobs.function}</h5>
        </span>

        <span>
          <h5>Roles : {jobs.roles}</h5>
        </span>

        <span>
          <h5>Skills : {jobs.skills}</h5>
        </span>

        <span>
          <h5>Education : {jobs.qualifications}</h5>
        </span>
      </div>

      <div className={styles.main}>
        <h2>About Recruiter</h2>
        <span>Functions : {jobs.function}</span>
        <br />
        <span>Industries : {jobs.industry}</span>
        <br />
        <span>Skills : {jobs.skills}</span>
        <br />
        <span>Roles : {jobs.roles}</span>
      </div>
    </div>
  );
}

export default JobPage;
