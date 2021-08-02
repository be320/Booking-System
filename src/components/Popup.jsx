import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import "./Popup.css";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import Button from "@material-ui/core/Button";
import DatePicker from './DatePicker'

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "60vh",
    height: "50vh",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    justifyContent: "center"
  }
}));

const Popup = props => {
  const classes = useStyles();
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={{ top: "15vh", left: "70vh" }} className={classes.paper}>
        <div className="popup-row">
          <p>Booking {props.resource.name}</p>
          <IconButton
            color="primary"
            aria-label="close"
            onClick={props.handleClose}
            style={{ marginLeft: "auto" }}
          >
            <CancelIcon />
          </IconButton>
        </div>
        <hr />
        <div className="popup-row">
          <p>Date From</p>
          <DatePicker />
        </div>
        <div className="popup-row">
          <p>Date To</p>
          <DatePicker />
        </div>
        <div className="popup-row">
          <p>Quantity</p>
        </div>
        <div className="popup-row" style={{justifyContent:'center'}}>
          <Button
            variant="contained"
            color="primary"
            
          >
            Book
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
