import logo from "./logo.svg";
import "./App.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";

import NavAppBar from "./utils/Nav";
import Shehia from "./views/shehia";
import SideBarAppMenu from "./utils/Sidebar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Stack spacing={3}>
      <Stack>
        <NavAppBar />
      </Stack>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <SideBarAppMenu />
          </Grid>
          <Grid item xs={10}>
              <Shehia />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

export default App;
