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

const ErrorMessage = props => {
  const classes = useStyles();
  const closeMessage = () => {
    props.handleErrorOpen(false);
  };
  return (
    <Modal
      open={props.errorOpen}
      onClose={closeMessage}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div
        style={{ top: "15vh", left: "70vh", justifyContent: "center" }}
        className={classes.paper}
      >
        <h1 style={{ color: "red" }}>Error !!!</h1>
        <h3>The Quantity you need is not available</h3>
      </div>
    </Modal>
  );
};

export default ErrorMessage;
