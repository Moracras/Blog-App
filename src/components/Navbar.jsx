import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



const defaultTheme = createTheme();



const Navbar = () => {


  
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
    

      
      {/* <ReactPlayer
        
        url={"https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"}
        playing
        object-fit="cover"
        loop
        muted
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      
        
      /> */}

      <Container component="main" maxWidth="md" style={{ position: 'relative' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                backdropFilter: 'blur(10px)',  // Saydamlık efekti
                marginTop: '100px',  // Video yüksekliğine göre ayarlayın
              }}
            >
              <Typography component="h1" variant="h5">
                Login
              </Typography>
            
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                backdropFilter: 'blur(10px)',  // Saydamlık efekti
                marginTop: '100px',  // Video yüksekliğine göre ayarlayın
              }}
            >
              <Typography component="h1" variant="h5">
                Dashboard
              </Typography>
              {/* Dashboard içeriğini ekleyin */}
              {/* Örneğin: */}
              {/* <DashboardContent /> */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Navbar