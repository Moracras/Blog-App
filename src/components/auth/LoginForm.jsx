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
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"






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

const defaultTheme = createTheme({
  palette: {
    primary:{
      main:  "#FFF",
      fontWeight:"3",
      shape:{
        borderRadius:1
      }   
    },
  },
});

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

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
      <Grid container component="main" zIndex={0} sx={{height:"100vh",  display:"flex",flexDirection:"column",justifyContent:"center" ,alignItems:"center" , }}>
        
        <CssBaseline />
        
        <BgVideo/>
          
         
        
        <Grid  
        zIndex={0}
        item  
        component={Paper}
        sx={{
          
          height:"50vh",
          width:"350px", 
          borderRadius:"10px",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          boxShadow:"0 0 10px rgba(0,0,0,0.1)",
          color:"#ffffff", 
          addingTop:"60px",
          fontWeight:"3",
          // marginLeft:"auto",
          // marginRight:"60px",
          // maxWidth:600,
          // maxHeight:480,
          margin:{xs:"auto",sm:"auto",md:"auto"},
          "@media (max-width: 480px)":{
            width:"100%",
            padding:"20px"
          }
          }} xs={12} sm={8} md={5}   elevation={6}  square >
          <Box
          
            sx={{
              
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography zIndex={0} component="h1"  variant="h5" sx={{color:"white",mb:1}}>
              Sign in
            </Typography>
            <Box component="form" zIndex={0} noValidate onSubmit={handleSubmit} sx={{ objectFit:"cover",  opacity: 0.8, }}>
              <TextField  sx={{display:"flex", flexDirection:"column", background:"transparent",outline:"none",borderRadius:"30px",boxShadow:"0 0 4px #ffff",transition:"boxShadow 0.5s ease","&:focus":{color:"#ffff"},backgroundColor: 'rgba(255, 255, 255, 0.1)',  opacity: 1,boxSizing:"border-box" }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
               autoFocus
                name="email"
                autoComplete="email"
               InputLabelProps={{
                sx: {
                  color: (theme) => (theme.palette.mode === 'light' ? '#ffffff' : theme.palette.primary.main),
                },
               }}
                inputProps={{
                  style:{color:"white"}
                }}
                
              />
               
              <TextField 
              sx={{background:"transparent",outline:"none",font:"13px",borderRadius:"30px",boxShadow:"0 0 4px #ffff",transition:"boxShadow 0.5s ease",backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(3px)',  opacity: 1 }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                type={showPassword? "text" : "password"}
                autoComplete="current-password"
                inputProps={{
                  style:{color:"white"},
                  endAdornment: (
                    <InputAdornment position="end" >
                      <IconButton  onClick={handleTogglePasswordVisibility} edge="end" color='inherit'sx={{opacity: 0.8}}>
                        {showPassword ? <VisibilityOffIcon zIndex={0}  /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  sx: {
                    color: (theme) => (theme.palette.mode === 'light' ? '#ffff' : theme.palette.primary.main),
                  },
                 }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
          
                
                type="submit"
                fullWidth
                variant="contained"
                sx={{color:"white", mt: 3, mb: 2, background:"transparent", borderRadius:"30px", boxShadow:"0 0 10px #ffff",cursor:"pointer","&:hover":{boxShadow:"0 0 10px #ffff", } }}
              >
                Sign In
              </Button>
              <Grid container sx={{display:"flex", flexDirection:"column", gap:"3"}}>
                <Grid item xs sx={{gap:"2"}}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item sx={{alignItems:"center"}}>
                  <Link sx={{mt:2}} href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                  <Copyright  sx={{mb: 3,color:"white" }} />
                </Grid>
                
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}