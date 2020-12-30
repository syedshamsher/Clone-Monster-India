import React from "react";
import { IconButton, Button, Typography, Box } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  closeicon: {
    textAlign: "right",
  },
  box: {
    width: "250px",
    margin: "0px auto",
    textAlign: "center",
  },
  button: {
    marginBottom: "10px",
    background: "#4a90e2",
    width: "219px",
    borderRadius: 2,
    "&:hover": {
      backgroundColor: "#4a90e2",
    },
  },
  typography: {
    color: "#B4BBE2",
    fontSize: 18,
    fontWeight: 400,
  },
}));

const SideNavBar = ({ 
  handleDrawerClose, 
  handleJobSearch,
  handleWfh,
  handleCareer,
  handleResume
 }) => {
  const classes = useStyles();
  return (
    <div className={classes.mainBox}>
      <div className={classes.closeicon}>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div style={{ height: "90%", textAlign: "center", padding: "30px 0" }}>
        <Box className={classes.box} onClick={handleJobSearch}>
          <Typography className={classes.typography}>JOB SEARCH</Typography>
        </Box>

        <Box color="text.primary" className={classes.box} onClick={handleWfh}>
          
          <Typography className={classes.typography}>WORK FROM HOME</Typography>
        </Box>

        <Box
          color="text.primary"
          className={classes.box}
          onClick={handleCareer}
        >
          <Typography className={classes.typography}>CAREER TIPS</Typography>
        </Box>

        <Box
          color="text.primary"
          className={classes.box}
          onClick={handleResume}
        >
          <Typography className={classes.typography}>
            RESUME SERVICES
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default SideNavBar;
