import ListDashboard from './ListDashboard';
import {
 Card,
CardHeader,
  
} from '@mui/material';


const Summary = (props) => {
return(
<Card {...props}>
    <CardHeader
      
      align=  "center"
      title="  Summary "
    />
  <ListDashboard/>
     
  </Card>
  
)};
export default Summary;
