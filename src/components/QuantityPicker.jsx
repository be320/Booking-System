import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

// Quantity Picker component that can be used to select the quantity of the resource required
const QuantityPicker = props => {
  const classes = useStyles();

  const addOne = () => {
    if (props.quantity < 100) props.handleQuantity(props.quantity + 1);
  };

  const minusOne = () => {
    if (props.quantity > 1) props.handleQuantity(props.quantity - 1);
  };

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <IconButton
          color="primary"
          aria-label="minus"
          style={{ marginLeft: "auto" }}
          onClick={minusOne}
        >
          <RemoveIcon />
        </IconButton>
        <TextField
          disabled
          id="standard-disabled"
          style={{ width: "7vh", alignItems: "center" }}
          defaultValue={1}
          value={props.quantity}
        />
        <IconButton
          color="primary"
          aria-label="plus"
          style={{ marginLeft: "auto" }}
          onClick={addOne}
        >
          <AddIcon />
        </IconButton>
      </ButtonGroup>
    </div>
  );
};

export default QuantityPicker;
