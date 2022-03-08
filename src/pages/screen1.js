import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Compressortracker} from '../components/dashboard/compressortracker';
import { DashboardLayout } from '../components/dashboard-layout';
import dynamic from  'next/dynamic';
import UnitTable from 'src/components/DataTables/UnitTable';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Unitmapleaf = dynamic(() => import('../components/mapopenstreet/unitmapleaf'), { ssr: false });

const Screen1 = () => (
  <>
    <Head>
      <title>
        Unit Overview
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
  <Container maxWidth={false}>
   <Grid>  <Compressortracker sx={{ width: '100%' }} /> </Grid>     
   <Grid container direction={'row'}>
  </Grid>
  <Grid container spacing={3}>
  <Grid item xs={3}>
  <Unitmapleaf lat={53.437389} longs={-2.98517}/> 
    </Grid>
    <Grid item xs={9}>
    <UnitTable/> 
    </Grid>
    
      </Grid>
  </Container> 
  <Box sx={{ flexGrow: 1 }}>
  
    </Box>
  </Box>
  </>
);


Screen1.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Screen1;
