import React from 'react'
import Button from '@material-ui/core/Button';

const BookingButton = (props) => {

var resource = props.resource

const openPopup = () =>{

}

return(
    <Button variant="contained" color="primary" onClick={openPopup}>
    Book Here
  </Button>
)
}

export default BookingButton