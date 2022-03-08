import { useState,forwardRef }from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Trend from 'react-trend';
import UnitTable from '../DataTables/UnitTable';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down"
ref={ref}
{...props} />;
});

const TrendTable = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined"
onClick={handleClickOpen}>
        {props.trend}
      </Button>
      <Dialog
        fullWidth="lg"
        maxWidth="lg"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{ props.trend + " Fleet"}</DialogTitle>
        
       
        <UnitTable/>
      
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );


};

export default TrendTable;