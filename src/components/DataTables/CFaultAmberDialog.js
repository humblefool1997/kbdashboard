import { useState,forwardRef }from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CFaultAmberTable from './CFaultAmberTable';
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down"
ref={ref}
{...props} />;
});


const CFaultAmberDialog = (props) => {
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
    
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="lg"
        fullWidth="true"
        aria-describedby="alert-dialog-slide-description"
      >
            
      <CFaultAmberTable/> 
         
     
    
        
      
      </Dialog>
    </div>
  );


};

export default CFaultAmberDialog;