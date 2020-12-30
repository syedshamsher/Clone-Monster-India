import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import "./MainPageSearch.css"
import { SearchBarContainer } from './SearchBarContainer';
import { JobLinks } from './JobLinks';
import { SearchContainerHeaderLinks } from './SearchContainerHeaderLinks';
import { Button } from '@material-ui/core';

export const MainPageSearch = () => {
    return (
        <div className = "main_search">
            <h1 className = "heading">100,000+ Jobs. Find Better. Faster</h1>
            <div className ="middle">
                <div className = "all_jobs">
                    <div className = "top">
                        <SearchContainerHeaderLinks/>
                    </div>
                    <div className = "search_bar_container">
                        <SearchBarContainer/>
                    </div>
                    <div className = "advanced_search">
                        <h4 > Advanced Search</h4>
                    </div>
                    <div className = "bottom">
                        <JobLinks/>
                    </div>
                </div>
                <div className = "profile_box">
                   <div className ="inside_div">
                       <div className = "user_details">
                           <div>
                           <h5> Anusha </h5>
                           </div>
                           <div>
                                <span>74%</span>
                                <p>profile score</p>

                           </div>
                           
                        </div>
                       <div className = "recommended_jobs">
                            <div>100</div>
                            <p>Recommended jobs for you</p>
                            <a href = "">view jobs</a>
                       </div>
                       <div className = "alerts">
                            <div className = "pending_actions">
                                <div className = "pending_num">
                                    <div> 30 </div>
                                    <p>pending actions</p>

                                </div>
                                
                                <Button color = "primary" variant = "outlined">update profile </Button>
                            </div>
                            <div className = "job_alerts">
                                <h3> job alerts </h3>
                                <div>update job alerts based on various criteria</div>
                                <Button color ="primary" variant = "contained">create Alert</Button>

                            </div>

                       </div>
                   </div>

                </div>

            </div>
            
            
        </div>
    )
}
