import { useState,forwardRef }from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Slide from '@mui/material/Slide';
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down"
ref={ref}
{...props} />;
});


const TrendGraph = (props) => {
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
        maxWidth="lg"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
       
          <img
            src={props.url}

            loading="lazy"
          />
       
      
      </Dialog>
    </div>
  );


};

export default TrendGraph;