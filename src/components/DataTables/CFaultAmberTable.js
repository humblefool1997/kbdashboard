import Head from 'next/head';
import { Box, Container, Link } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
      borderRight: `1px solid ${
        theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
      }`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      borderBottom: `1px solid ${
        theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
      }`,
    },
    '& .MuiDataGrid-cell': {
      color:
        theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
    },
    '& .MuiPaginationItem-root': {
      borderRadius: 0,
    },
    
  }));
  const columns = [
   
    {
      field: 'status',
      headerName: 'Status',
      columnHeaderTitle: 'Status',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 100,
      renderCell: (params) => (
        <strong>
          
          <Button
            variant="contained"
            color={params.value}
            size="small"
            style={{ marginLeft: 16 }}
          >
            
          </Button>
        </strong>
      ),
   
  },
    
  
    { field: 'id', 
      headerName: 'Unit No', 
      width: 90,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center',
    },
    
    
    
    {
      field: 'location',
      headerName: 'Location',
      width: 200,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    
    },
    {
      field: 'health',
      headerName: 'Health (%)',
      width: 100,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'dutycycle',
      headerName: 'Duty Cycle (%)',
      width: 150,
      type: 'number',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center',
     
    },
    {
      field: 'operatinghours',
      headerName: 'Operating Hours (hrs)',
      width: 180,
      type: 'number',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'justify',
      align: 'center',
     
    },
    {
      field: 'fc_a_b',
      headerName: 'Functioning Compressor',
      width: 220,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center',
     
    }
    
  ];
  
  const rows = [
  
    { id: 777004,  status: 'orange', fc_a_b: 'A', location: 'Sefton', health: 50, dutycycle: '50',operatinghours: '2400'},
    { id: 777018,  status: 'orange',  fc_a_b: 'A', location: 'Hale, Halton', health: 50, dutycycle: '45',operatinghours: '1900'},
  
   
  
   
  ];
const CFaultAmberTable =() =>{
    return (
    <Container maxWidth={true}>
     
      <div style={{ height: 800, width: '100%' }}>
      <Box
      sx={{
        height: 200,
        width: 1,
        '& .super-app-theme--header': {
          backgroundColor: '#D3D3D3',
        },
        
      }}
    >
  
       <StyledDataGrid
        
        sx={{ m: 3 }}
        rows={rows}
        columns={columns}
        pageSize={12 }
        rowsPerPageOptions={[10]}
      disableSelectionOnClick
     
      
        />
       
    </Box>
      
    </div>
    </Container>
)
 
};

export default CFaultAmberTable;