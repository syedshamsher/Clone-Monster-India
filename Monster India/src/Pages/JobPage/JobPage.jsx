import React from "react";
import styles from "./style.module.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import WorkIcon from "@material-ui/icons/Work";
import ShareIcon from "@material-ui/icons/Share";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Footer from "../../Components/Footer/Footer";

function JobPage(props) {
  console.log( props.data )
  return (
    <div>
      <div>
        <div style = {{fontSize: 30, color: "grey", marginLeft: -1000, marginTop: 120}} > About the Job in Detail </div>
        {/* <div className={styles.right}>
          <StarBorderIcon style={{ color: "#9B9B9B", height: 80 }} />
          <ShareIcon style={{ color: "#9B9B9B", height: 80  }} />
          <button className={styles.applyBtn}>Apply</button>
        </div> */}
      </div>
      <div className={styles.main}>
        <div style = {{height: 120, width: 1000, marginBottom: 0}} >
          <div className={styles.profileName}>
            {props.data.profile_name}
          </div>
          <div className={styles.companyName}>
            {props.data.company_name}
          </div>
          <div className={styles.locExpSal}>
            <div className={styles.locExpSalChild}>
              <LocationOnIcon style={{ color: "#9B9B9B", height: 20 }} />
              <div>{props.data.location}</div>
            </div>
            <div className={styles.locExpSalChild}>
              <WorkIcon style={{ color: "#9B9B9B", height: 20 }} />
              <div>{props.data.experience}</div>
            </div>
            <div className={styles.locExpSalChild}>
              <LocalAtmIcon style={{ color: "#9B9B9B", height: 20 }} />
              <div>{props.data.salary}</div>
            </div>
          </div>
          {/* <div className={styles.description}>{props.data.description}</div> */}
          {/* <div className={styles.skills}>
            Skills: <span>{props.data.skills}</span>
          </div> */}
        </div>
      </div>

      <div>
        <span style = {{fontSize: 15, marginLeft: -880, marginLeft: -860}} >
          <span>PostedOn:{props.data.posted} | </span>
          <span>Total Views: {props.data.total_views} | </span>
          <span>Total Application: {props.data.total_applicants} | </span>
          <span>Job ID: {props.data.job_id}</span>
        </span>
      </div>

      <div style = {{marginTop: 10, padding: 20, backgroundColor: "white", width: 860, textAlign: "left", marginLeft: 60}}>
        <h4  style= {{marginBottom: 20}} >JOB DESCRIPTION</h4>
        <p>
          <ul>
            {props.data.job_description && props.data.job_description.map(item => (
              <li style = {{margin: 8, color: "#696969"}} > {item} </li>
            ))}
            <br />
            <span style = {{color: "#696969"}} >For more details contact Ritesh : 8920888891</span>
            {/* <span>Email-Id : {props.data.}</span> */}
          </ul>
        </p>
      </div>

      <div style = {{marginTop: 10, padding: 20, backgroundColor: "white", width: 860, textAlign: "left", marginLeft: 60}} >
        <h2>Job Details</h2>
        <span>
          <h5 style = {{marginTop: 20}}>Industry : {props.data.industry}</h5>
        </span>

        <span>
          <h5 style = {{marginTop: 10}}>Function : {props.data.function}</h5>
        </span>

        <span>
          <h5 style = {{marginTop: 10}}>Roles : {props.data.role}</h5>
        </span>

        <span>
          <h5 style = {{marginTop: 10}}>Skills : <button style = {{borderRadius: 20, background: "#D3D3D3", border: "0px", height: 30, width: 100, color: "grey"}} >{props.data.skills}</button></h5>
        </span> 

        <span>
          <h5 style = {{marginTop: 10}}>Education : {props.data.qualifications}</h5>
        </span>
      </div>

      <div style = {{marginTop: 10, padding: 20, marginBottom: 50, backgroundColor: "white", width: 860, textAlign: "left", marginLeft: 60}}>
        <h2 >About {props.data.company_name} </h2>
        <div style= {{marginTop: 20, lineHeight: 2}}>We are a one stop solution for all types of industry recruitment. We are the leading job consultancy service providers in the industry with specialization in almost all sectors ranging from medical, hospitality, automotive, airlines, Engineering, banking to logistics, the list is endless. We completely analyze and understand our client's expectations for the recruitment and thus, strive hard to meet the same in highly professional manner.</div>
      </div>
      <br/>
      <Footer />
    </div>
  );
}

export {JobPage};
