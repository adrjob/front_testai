import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Contact() {
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
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              style={{marginBottom: '40px'}}
            >
              Contact
            </Typography>
            {/* <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Contact Info
            </Typography>   */}
            <form action="">
                <TextField id="outlined-basic" label="Name" variant="outlined" style={{width: '100%'}}/><br/><br/>
                <TextField id="outlined-basic" label="Email" variant="outlined" style={{width: '100%'}}/><br/><br/>
                <TextField id="outlined-basic" label="Message" variant="outlined" style={{width: '100%'}}/><br/><br/>
                <Button size="small" variant='contained' style={{backgroundColor: "green"}}>Send</Button>
            </form>          
          </Container>
        </Box>        
      </main>      
  );
}