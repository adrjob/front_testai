import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function About() {
  return (                
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'transparent',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              About
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
            We are a leading artificial intelligence (AI) laboratory focused on developing cutting-edge solutions to accelerate the world’s transformation to a more intelligent future. Our team of passionate and experienced scientists, engineers, and entrepreneurs are driven by a common goal to use AI to solve real-world problems.
            <br /><br />
            We focus on the development of AI-driven products and services that help businesses and organizations automate their operations and improve efficiency. Our state-of-the-art technology and innovative methodologies make us one of the world's leading AI labs.
            <br /><br />
            We work with some of the largest companies and organizations in the world, helping them achieve their goals through our AI-powered products and services. Whether it's optimizing a business processes, or creating new, personalized customer experiences, we can help bring the power of AI to your organization.
            <br /><br />
            At our core, we strive to build intelligent solutions that benefit society and make the world a better place. Our commitment to research and technology helps us evolve the innovations of tomorrow. Let's work together to create a bright future for everyone.
            </Typography>            
          </Container>
        </Box>        
      </main>      
  );
}