import Head from 'next/head';
import * as React from 'react';
import { Box,Grid } from '@mui/material';
import  Summary  from '../components/dashboard/summary';
import { DashboardLayout } from '../components/dashboard-layout';
import dynamic from  'next/dynamic'
import Fleethealth from 'src/components/graphs/fleethealth';

const Mapleaf = dynamic(() => import('../components/mapopenstreet/mapleaf'), { ssr: false });

 const Dashboard = () => (
  <>
    <Head>
      <title>
        KPI's and Alerts
      </title>
    </Head>
   
  <Grid
  container
  direction="row"
  justifyContent="space-evenly"
  >

</Grid>
<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={2}>
<Grid item xs="auto">
<Mapleaf lat={53.437389} longs={-2.98517} sx={{ height: '50%' }} />
</Grid>

<Grid item xs="auto">

<Fleethealth  />


</Grid>
<Grid item xs="auto">
<Summary sx={{
   minWidth: 300,
   minHeight: 650
}}/>

</Grid>
  </Grid>
  </Box>
     
    
      
         
         
  
      
           
  </>
);


Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
