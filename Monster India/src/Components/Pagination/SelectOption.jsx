import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 50,
  },
}));

function SelectOption( {onChange ,value} ) {
  
  const classes = useStyles();
//  const [value, setValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-controlled-open-select-label">select</InputLabel> */}
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