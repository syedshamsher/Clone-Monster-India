import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '@material-ui/core/Drawer';
import SideNavBar from './SideNavBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import monsterlogo from "../Images/download.png";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  drawer: {
    backgroundColor : 'default',
  },
  logo: {
    // maxWidth: 135,
    marginLeft: 25,
    height: "36px",
    marginRight: '10px',
    cursor: "pointer"
  },
  btn: {
    marginLeft: "auto"
  },
  login: {
    backgroundColor : '#3F51B5',
  },  
  tab: {
marginLeft: 30
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const [jobSearch, setJobSearch] = React.useState(null);
  const [wfh, setWfh] = React.useState(null);
  const [career, setCareer] = React.useState(null);
  const [resume, setResume] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [login, setLogin] = React.useState(false);

  let history = useHistory()

  const handleLandingPage = () => {
    history.push('/landingpage')
  }

  const handleJobSearch = (event) => {
    // setJobSearch(event.currentTarget);
    history.push('/jobsearchfirst')
  };

  const handleJobSearchClose = () => {
    setJobSearch(null);
  };

  const handleWfh = (event) => {
    setWfh(event.currentTarget);
    history.push('/workfromhome')
  };

  const handleWfhClose = () => {
    setWfh(null);
  };

  const handleCareer = (event) => {
    setCareer(event.currentTarget);
    history.push('/careertips')
  };

  const handleCareerClose = () => {
    setCareer(null);
  };

  const handleResume = (event) => {
    setResume(event.currentTarget);
    history.push('/resumeservices')
  };

  const handleResumeClose = () => {
    setResume(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogininOpen = () => {
    setLogin(true)
  }

  const handleLoginClose = () => {
    setLogin(false)
  }

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color= "white">
        <Toolbar>
          <Hidden smUp>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={handleDrawerOpen}/>
        </IconButton>
        </Hidden>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawer
          }}
        >
          <SideNavBar 
            handleDrawerClose={handleDrawerClose} 
            handleJobSearch={handleJobSearch}
            handleWfh={handleWfh}
            handleCareer={handleCareer}
            handleResume={handleResume}
            />
        </Drawer>
        
      <Tabs>
        {/* <Tab className={classes.monsterLogo}> */}
        {/* <Hidden smUp> */}
          <img 
          xs={12}
          sm={12}
          md={3}
          src={monsterlogo} 
          onClick = {handleLandingPage}
          alt="Kitty Katty!" 
          className={classes.logo} 
          />
          {/* </Hidden> */}
      {/* </Tab> */}
      <Hidden xsDown>
      <Tab label="Job Search" onClick={handleJobSearch} className={classes.tab}/>
      </Hidden>
     
          <Menu
        id="Job-Search"
        anchorEl={jobSearch}
        keepMounted
        open={Boolean(jobSearch)}
        onClose={handleJobSearchClose}
      >
        <MenuItem onClick={handleJobSearchClose}>JOBS BY LOCATION</MenuItem>
        <MenuItem onClick={handleJobSearchClose}>JOBS BY SKILLS</MenuItem>
        <MenuItem onClick={handleJobSearchClose}>JOBS BY TITLE</MenuItem>
        <MenuItem onClick={handleJobSearchClose}>JOBS BY FUNCTION</MenuItem>
        <MenuItem onClick={handleJobSearchClose}>JOBS BY INDUSTRY</MenuItem>
        <MenuItem onClick={handleJobSearchClose}>JOBS BY EDUCATION</MenuItem>
        <MenuItem onClick={handleJobSearchClose}>JOBS BY COMPANY</MenuItem>
        <MenuItem onClick={handleJobSearchClose}>JOBS BY CONSULTANT</MenuItem>
        <MenuItem onClick={handleJobSearchClose}>JOBS BY RECRUITER</MenuItem>
        <MenuItem onClick={handleJobSearchClose}>FRESHER JOBS</MenuItem>
        <MenuItem onClick={handleJobSearchClose}>OTHER JOBS</MenuItem>
      </Menu>
      <Hidden xsDown>
      <Tab label="WORK FROM HOME" onClick={handleWfh} color="inherit"  className={classes.tab}/>
      </Hidden>
          <Menu
        id="Job-Search"
        anchorEl={wfh}
        keepMounted
        open={Boolean(wfh)}
        onClose={handleWfhClose}
      >
        <MenuItem onClick={handleWfhClose}>JOBS IN BANGLORE</MenuItem>
        <MenuItem onClick={handleWfhClose}>JOBS BY SKILLS</MenuItem>
        <MenuItem onClick={handleWfhClose}>JOBS BY TITLE</MenuItem>
        <MenuItem onClick={handleWfhClose}>JOBS BY FUNCTION</MenuItem>
        <MenuItem onClick={handleWfhClose}>JOBS BY INDUSTRY</MenuItem>
        <MenuItem onClick={handleWfhClose}>JOBS BY EDUCATION</MenuItem>
        <MenuItem onClick={handleWfhClose}>JOBS BY COMPANY</MenuItem>
        <MenuItem onClick={handleWfhClose}>JOBS BY CONSULTANT</MenuItem>
        <MenuItem onClick={handleWfhClose}>JOBS BY RECRUITER</MenuItem>
        <MenuItem onClick={handleWfhClose}>FRESHER JOBS</MenuItem>
        <MenuItem onClick={handleWfhClose}>OTHER JOBS</MenuItem>
      </Menu>
      <Hidden smDown>
      <Tab label="CAREER TIPS" onClick={handleCareer}  className={classes.tab}/>
      </Hidden>
          <Menu
        id="Job-Search"
        anchorEl={career}
        keepMounted
        open={Boolean(career)}
        onClose={handleCareerClose}
      >
        <MenuItem onClick={handleCareerClose}>COVID 19 CAREER ADVICE</MenuItem>
        <MenuItem onClick={handleCareerClose}>JOB SEARCH STRATERGY</MenuItem>
        <MenuItem onClick={handleCareerClose}>RESUME & COVER LETTER </MenuItem>
        <MenuItem onClick={handleCareerClose}>INTERVIEW TIPS</MenuItem>
        <MenuItem onClick={handleCareerClose}>EXPERT'S VIDEOS</MenuItem>
        <MenuItem onClick={handleCareerClose}>CAREER MANAGEMENT</MenuItem>
        <MenuItem onClick={handleCareerClose}>SALARY NEGOTIATIONS</MenuItem>
        <MenuItem onClick={handleCareerClose}>RESEARCH REPORTS</MenuItem>
        <MenuItem onClick={handleCareerClose}>COURSES</MenuItem>
      </Menu>

      <Hidden mdDown>
      <Tab label="RESUME SERVICES" onClick={handleResume}  className={classes.tab}/>
      </Hidden>
          <Menu
        id="Job-Search"
        anchorEl={resume}
        keepMounted
        open={Boolean(resume)}
        onClose={handleResumeClose}
      >
        <MenuItem onClick={handleResumeClose}>XPRESS RESUME</MenuItem>
        <MenuItem onClick={handleResumeClose}>RIGHT RESUME</MenuItem>
        <MenuItem onClick={handleResumeClose}>CAREER BOOSTER</MenuItem>
        <MenuItem onClick={handleResumeClose}>RESUME HIGHLIGHTER</MenuItem>
        <MenuItem onClick={handleResumeClose}>PYSCHOMETRIC TEST</MenuItem>
      </Menu>
        </Tabs>
         
        <Button color="inherit" 
        className={classes.btn}
        onClick={handleLogininOpen}
        >Login</Button>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={login}
          classes={{
            paper: classes.drawer
          }}
        >
          <SideNavBar 
            handleDrawerClose={handleLoginClose} 
            handleJobSearch={handleJobSearch}
            handleWfh={handleWfh}
            handleCareer={handleCareer}
            handleResume={handleResume}
            />
        </Drawer>

        </Toolbar>
      </AppBar>
    </div>
  );
}
