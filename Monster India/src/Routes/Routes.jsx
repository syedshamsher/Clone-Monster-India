import React from 'react'
import {Route, Switch} from 'react-router-dom';
import JobSearch from '../Pages/JobSearch/JobSearch';
import WorkFromHome from '../Pages/WorkFromHome/WorkFromHome'
import CareerTips from '../Pages/CareerTips/CareerTips'
import ResumeServices from '../Pages/RsumeServices/ResumeServices'
import Navbar from '../Components/Navbar/NavBar'
import { JobDetails } from '../Pages/JobDetails/JobDetails';
import { Sidebar } from '../Components/FilterOption/Sidebar/Sidebar';
import JobSearchFirst from '../Pages/JobSearchFirst/JobSearchFirst';
import {MainPageSearch} from '../Components/MainPageSearch/MainPageSearch'
import { LandingPage } from '../Pages/Landing Page/LandingPage';

function Routes(){
return (
  <div>
    <Route path="/" component={Navbar} />
    <Switch>
      <Route path="/jobsearch-filter" exact component={Sidebar} />
      <Route path = "/job-details/:id" render = { (props) => <JobDetails {...props}/> }   />
    <Route path="/landingpage" exact component={LandingPage} />
    <Route path="/jobsearchfirst" exact component={JobSearchFirst} />
    <Route path="/jobsearch" exact component={JobSearch} />
    <Route path="/workfromhome" component={WorkFromHome} />
    <Route path="/careertips" component={CareerTips} />
    <Route path="/resumeservices" component={ResumeServices} /> 
    </Switch>    
</div>
)
}

export default Routes