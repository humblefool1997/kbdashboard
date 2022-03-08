import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from 'next/link';
import { ImageLoader } from './ImageLoader';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import CompressorStatsDialogAmber from '../CompressorStat/CompressorStatsDialogAmber';

const products = [
  {
    id: uuid(),
    name: 'Baseline Alerts',
    imageUrl: '/static/images/products/product_3.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Warning Threshold Alerts',
    imageUrl: '/static/images/products/product_2.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Critical Alerts',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: subHours(Date.now(), 3)
  },
  {
    id: uuid(),
    name: 'Total Alerts',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: subHours(Date.now(), 5)
  }
];

export const Compressortrackeramber = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title=" Unit Overview "
    />
    <Divider />

    <Stack direction="row"
spacing={70} >
    <Button fullWidth >Unit No:777004</Button>
    <FormControl fullWidth  >
        <InputLabel id="demo-simple-select-label">Unit Number</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         label="uno"
        >
         
         <Link href='/screen1'>
          <MenuItem value={10}>777001</MenuItem>
          </Link>
          <Link href='/screen1amber'>
          <MenuItem value={20}>777004</MenuItem>
          </Link>
          <Link href='/screen1red'>
          <MenuItem value={30}>777016</MenuItem>
          </Link>
        </Select>
      </FormControl>

   </Stack>
    <Box sx={{ minWidth: 90 }}>
     
    </Box>
    
    <List>
    <ImageLoader/>
    </List>

    <Stack direction="row"
spacing={50}>
    
    <Stack sx={{ width: '30%', color: 'grey.500' }}
spacing={1}>
       <LinearProgress variant='determinate'
color="palak"
value="80" />
       
      <Button>Compressor B Health 80%</Button>
      <CompressorStatsDialogAmber/>
     </Stack>
     
     
    <Stack sx={{ width: '30%', color: 'grey.500' }}
spacing={1}>
      <LinearProgress  variant="determinate"
color="orange"
value="60" />
      <Button>Compressor A Health 60%</Button>
    </Stack>
    
    </Stack>
    
  
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
     
    </Box>
    
  </Card>
);
