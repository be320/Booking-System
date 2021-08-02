import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    // display: "flex",
    // flexWrap: "wrap"
  },
  textField: {
    width: '29vh',
    marginTop:'1vh'
  }
}));

const DatePicker = () => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
      />
    </form>
  );
};

export default DatePicker;
