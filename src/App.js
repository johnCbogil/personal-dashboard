import xr from './xr.png';
import './App.css';
import { Box, Container, Paper, Typography } from '@mui/material';

const serviceList = [
  "422.61 ppm", "The ultimate, hidden truth of the world is that it is something that we make, and could just as easily make differently.<br><br>-David Graeber",
  "image"
];

function App() {
  return (
    <Container>
      {serviceList.map((service) => (
        <Paper sx={{ m: 10 }} elevation={3}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {service === "image" ? (
              <img src={xr} alt="xr" />
            ) : (
              <Typography
                sx={{ p: 5 }}
                variant="h2"
                dangerouslySetInnerHTML={{ __html: service }}
              />
            )}
          </Box>
        </Paper>
      ))}
    </Container>
  );
}

export default App;
