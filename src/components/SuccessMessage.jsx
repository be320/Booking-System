import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "60vh",
    height: "25vh",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    justifyContent: "center"
  }
}));

const SuccessMessage = props => {
  const classes = useStyles();
  function rand() {
    return Math.floor(Math.random() * 100000);
  }
  const closeMessage = () => {
    props.handleSuccessOpen(false);
  };
  return (
    <Modal
      open={props.successOpen}
      onClose={closeMessage}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={{ top: "15vh", left: "70vh", justifyContent:'center' }} className={classes.paper}>
        <h1 style={{color:'green'}}>Booked !!</h1>
        <h3 >Your booking is successfully completed</h3>
        <p>EMAIL SENT TO admin@admin.com FOR CREATED BOOKING WITH ID {rand()} </p>
      </div>
    </Modal>
  );
};

export default SuccessMessage;
