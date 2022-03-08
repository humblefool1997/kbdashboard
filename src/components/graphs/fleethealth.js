import { Card, CardContent, CardHeader } from '@mui/material';
import dynamic from 'next/dynamic'
import CardActions from '@mui/material/CardActions';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const TrendGraph = dynamic(() => import('../trends/TrendGraph'), { ssr: false });
export const data = {
  labels: ['Red', 'Amber', 'Green',],
  datasets: [
    {
      label: '# of Fleet',
      data: [1,2,7],
      backgroundColor: [
        '#D2222D',
        '#FFBF00',
        '#238823',

      ],
      borderColor: [
        '#D2222D',
        '#FFBF00',
        '#238823',
        
      ],
      borderWidth: 1,
    },
  ],
};
const Fleethealth = () =>{
 


    return (
    <Card 
    sx={{
      bgcolor: 'background.paper',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
      minWidth: 300,
      minHeight: 650
    }}
    >
    <CardContent>
   
    <CardHeader title="Fleet Health" align="center">
      
    </CardHeader>
      

    <Doughnut data={data} />


    <CardActions>
   <TrendGraph trend="Week" url="https://github.com/humblefool1997/CDN_ASSETS/raw/main/week.png" ></TrendGraph>
   <TrendGraph trend="Month" url="https://github.com/humblefool1997/CDN_ASSETS/raw/main/month.png" ></TrendGraph>
   <TrendGraph trend="Year" url="https://github.com/humblefool1997/CDN_ASSETS/raw/main/year.png"></TrendGraph>
   </CardActions>
  </CardContent>
 </Card>  
     ) 
}
export default Fleethealth;
