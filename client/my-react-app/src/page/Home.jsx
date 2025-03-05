// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     useEffect(() => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         setIsLoggedIn(true);
//       }
//     }, []);


//     return (    
//         <div>
//             <h1>Welcome to the Home Page</h1>
//             <p>This is the home page content.</p>
//             {isLoggedIn ? (
//             <button><Link to="/dashboard">Dashboard</Link></button>
//             ) : (
//             <button><Link to="/login">Login</Link></button>
//             )}
            
//         </div>
//     );
//     };
//     export default Home;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
  CssBaseline,
  Paper
} from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, sm: 4 },
            width: '100%',
            maxWidth: 600,
            borderRadius: 2,
            textAlign: 'center'
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 3,
              fontSize: { xs: '2rem', sm: '3rem' }
            }}
          >
            Welcome to the Home Page
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: 'text.secondary',
              fontSize: { xs: '1rem', sm: '1.125rem' }
            }}
          >
            This is the home page content.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {isLoggedIn ? (
              <Button
                variant="contained"
                color="primary"
                startIcon={<DashboardIcon />}
                component={Link}
                to="/dashboard"
                sx={{
                  py: 1.5,
                  px: 4,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    bgcolor: 'primary.dark'
                  }
                }}
              >
                Dashboard
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                startIcon={<LoginIcon />}
                component={Link}
                to="/login"
                sx={{
                  py: 1.5,
                  px: 4,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    bgcolor: 'primary.dark'
                  }
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Home;