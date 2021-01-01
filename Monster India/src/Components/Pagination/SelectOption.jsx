import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 30

  },
}));

function SelectOption( {onChange ,value} ) 
{
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id =  'filled-age-native-simple'
          variant = "filled"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={(e) => onChange( e.target.value)}
          
        >
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}


export {SelectOption}