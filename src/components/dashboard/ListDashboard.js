import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CFaultRedDialog from '../DataTables/CFaultRedDiaglog';
import CFaultAmberDialog from '../DataTables/CFaultAmberDialog';
import CFaultGreenDialog from '../DataTables/CFaultGreenDialog';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const ListDashboard = () =>{

    return (
        <div>
          <Stack spacing={5}>
            <Item>
            <img src="/static/Icons/stadler_red.png" width="80" height="80"></img>
            <h3>1</h3>
            <CFaultRedDialog/>
            </Item>
            <Item>
            <img src="/static/Icons/stadler_amber.png" width="80" height="80"></img>
            <h3>2</h3>
            <CFaultAmberDialog/>
            </Item>
            <Item>
            <img src="/static/Icons/stadler_green.png" width="80" height="80"></img>
            <h3>7</h3>
            <CFaultGreenDialog/>
            </Item>
          </Stack>
        </div>
      );

}

export default ListDashboard;