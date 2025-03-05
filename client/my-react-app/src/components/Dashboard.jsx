// // client/src/components/Dashboard.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// function Dashboard() {
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5000/api/dashboard', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setMessage(response.data.message);
//       } catch (err) {
//         localStorage.removeItem('token');
//         localStorage.removeItem('isAdmin');
//         navigate('/login');
//         console.error(err);
//       }
//     };
//     fetchDashboard();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('isAdmin');
//     navigate('/');
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       <p>{message}</p>
//       <button onClick={handleLogout}>Logout</button>
//       <button><Link to="/">Home</Link></button>
//     </div>
//   );
// }

// export default Dashboard;

// client/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  CssBaseline
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

function Dashboard() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/dashboard', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessage(response.data.message);
      } catch (err) {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        navigate('/login');
        console.error(err);
      }
    };
    fetchDashboard();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  return (
    <>
      <CssBaseline /> {/* Normalizes CSS across browsers */}
      <Container 
        maxWidth="sm" 
        sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center',
          py: 4 
        }}
      >
        <Paper 
          elevation={6} 
          sx={{ 
            p: { xs: 3, sm: 4 }, 
            width: '100%',
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 3
            }}
          >
            Admin Dashboard
          </Typography>
          
          <Typography 
            variant="body1" 
            align="center" 
            sx={{ 
              mb: 4,
              color: 'text.secondary'
            }}
          >
            {message}
          </Typography>

          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' }, 
              gap: 2,
              justifyContent: 'center'
            }}
          >
            <Button
              variant="contained"
              color="error"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              fullWidth
              sx={{ 
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: 'error.dark'
                }
              }}
            >
              Logout
            </Button>
            
            <Button
              variant="contained"
              color="primary"
              startIcon={<HomeIcon />}
              component={Link}
              to="/"
              fullWidth
              sx={{ 
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: 'primary.dark'
                }
              }}
            >
              Home
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default Dashboard;