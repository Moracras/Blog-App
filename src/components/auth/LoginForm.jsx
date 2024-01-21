import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BgVideo from '../BgVideo';
import { FormLabel } from '@mui/material';



function Copyright(props) {
  return (
    <Typography variant="body2" justify="center" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Moracras
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="Box" sx={{ display:"flex",flexDirection:"column", height:"100vh"  }}>
        
        <CssBaseline />
        
        <BgVideo/>
          
         
        
        <Grid  item sx={{height:"310px",width:"270px", borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",background:"rgba(0,0,0,0.1)",boxShadow:"0 0 10px rgba(0,0,0,0.1)",color:"#ffff", paddingTop:"60px"}} xs={12} sm={8} md={5} component={FormLabel}  elevation={6} square >
          <Box
          
            sx={{
              
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography  component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form"  zIndex={0} noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField sx={{background:"transparent",outline:"none",font:"13px",borderRadius:"30px",boxShadow:"0 0 4px #ffff",transition:"boxShadow 0.5s ease", }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField 
              sx={{background:"transparent",outline:"none",font:"13px",borderRadius:"30px",boxShadow:"0 0 4px #ffff",transition:"boxShadow 0.5s ease", }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
          
              
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background:"transparent", borderRadius:"30px", boxShadow:"0 0 4px #ffff",cursor:"pointer" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item >
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                  <Copyright  sx={{mr:6, mt: 5}} />
                  
                </Grid>
                
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}