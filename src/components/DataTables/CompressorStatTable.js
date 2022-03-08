import { Box, Container, Link } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button'
const columns = [
 
    {
      field: 'Day',
      headerName: 'Day',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 100,
   
  },
    
  
    
{
      field: 'week',
      headerName: 'Week',
      width: 220,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
     
    },
    { field: 'month', 
      headerName: 'Month', 
      width: 90,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
    
    
    {
      field: 'year',
      headerName: 'Year',
      width: 100,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      
    },
   
    
    
  ];
  
  const rows = [
    { id: 7, status: 'orange', fc_a_b: 'A',health: 25, dutycycle: '89', operatinghours: '3500', days_last_maintained: 3,
     lastmaintaineddate: new Date(2021, 1, 1),   },
     { id: 777001, status: 'palak', fc_a_b: 'A',health: 25, dutycycle: '89', operatinghours: '3500', days_last_maintained: 3,
     lastmaintaineddate: new Date(2022, 11, 1)   },
    
   
  ];
const CompressorStatTable = () =>{




}

export default CompressorStatTable;