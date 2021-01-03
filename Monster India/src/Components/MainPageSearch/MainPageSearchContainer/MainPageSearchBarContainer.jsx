import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import "./MainPageSearch.css"
import { SearchBarContainer } from './SearchBarContainer';
import { JobLinks } from './JobLinks';
import { SearchContainerHeaderLinks } from './SearchContainerHeaderLinks';
import { Button } from '@material-ui/core';

export const MainPageSearchBarContainer = () => {
    return (
        <div className = "main_search">
            <p className = "heading">100,000+ Jobs. Find Better. Faster</p>
            <div className ="middle">
                <div className = "all_jobs">
                    <div className = "top">
                        <SearchContainerHeaderLinks/>
                    </div>
                    <div className = "search_bar_container">
                        <SearchBarContainer/>
                    </div>
                    <div className = "advanced_search">
                        <p > Advanced Search</p>
                    </div>
                    <div className = "bottom">
                        <JobLinks/>
                    </div>
                </div>
                <div className = "profile_box">
                   <div className ="inside_div">
                       <div className = "user_details">
                           <div style = {{alignItems: "left"}}>
                           <h4> Anant Jain </h4>
                           </div>
                           <div style = {{marginLeft: 240}} >
                                <p style = {{marginLeft: 40, color: "green", fontWeight: 700, fontSize: 18}} >74%</p>
                                <p style= {{fontSize: 14, marginTop: -10}} >Profile Score</p>
                           </div>
                           
                        </div>
                       <div className = "recommended_jobs">
                            <div style= {{padding: 7, paddingLeft: 5, color: "white"}} >100</div>
                            <p style = {{marginRight: 50}} >Recommended jobs for you</p>
                            <a style ={{marginTop: 5}} href = ""><h5>View Jobs</h5> </a>
                       </div>
                       <div className = "alerts">
                            <div className = "pending_actions">
                                <div className = "pending_num">
                                    <div style= {{padding: 5, color: "white", marginRight: 10}}> 30 </div>
                                    <p>Pending Actions</p>

                                </div>
                                
                                <button  style = {{color: "#5D50A6", background: "white", border: "1px solid #5D50A6", height: 45, width: 120, borderRadius: 5, fontSize: 15, marginTop: 30}}>Update Profile </button>
                            </div>
                            <div className = "job_alerts">
                                <h3> Job Alerts </h3>
                                <div style = {{fontSize: 14}} >Update Job Alerts Based on various criteria</div>
                                <button style = {{color: "white", background: "#5D50A6", height: 45, width: 120, borderRadius: 5, fontSize: 15}} >Create Alert</button>

                            </div>

                       </div>
                   </div>

                </div>

            </div>
            
            
        </div>
    )
}
