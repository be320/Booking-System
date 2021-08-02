import React, { useState } from "react";
import "./Dashboard.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Popup from "../components/Popup";
import Button from '@material-ui/core/Button';


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const resources = [
  { id: 1, name: "Resource 1", quantity: 5 },
  { id: 2, name: "Resource 2", quantity: 3 },
  { id: 3, name: "Resource 3", quantity: 8 },
  { id: 4, name: "Resource 4", quantity: 2 }
];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [resourceClicked,setResourceClicked] = useState('')

  const handleOpen = (value) => {
    setOpen(true);
    setResourceClicked(value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="dashboard-main">
      <h1>Resources</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resources.map(resource => (
              <StyledTableRow key={resource.id}>
                <StyledTableCell component="th" scope="row">
                  {resource.id}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ alignSelf: "start" }}>
                  {resource.name}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ alignSelf: "start" }}>
                  {resource.quantity}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={()=>{handleOpen(resource)}}
                    >
                      Book Here
                    </Button>
                  }
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Popup open={open} handleClose={handleClose} resource = {resourceClicked} />
    </div>
  );
};

export default Dashboard;
