import xr from './xr.png';
import { Grid, Container, Paper, Typography } from '@mui/material';

const serviceList = [
  "422.61 ppm",
  "The ultimate, hidden truth of the world is that it is something that we make, and could just as easily make differently.<br><br>-David Graeber",
  "image",
  "Lorem ipsum dolor sit amet",
  "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  "12345 xyz",
  "Sed ut perspiciatis unde omnis",
  "Neque porro quisquam est"
];

function App() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {serviceList.slice(0, 4).map((paper, index) => (
            <Paper key={index} elevation={3} style={{ margin: '10px', padding: '20px' }}>
              <Typography
                sx={{ p: 5 }}
                variant="h2"
                dangerouslySetInnerHTML={{ __html: paper }}
              />
            </Paper>
          ))}
        </Grid>
        <Grid item xs={6}>
          {serviceList.slice(4).map((paper, index) => (
            <Paper key={index} elevation={3} style={{ margin: '10px', padding: '20px' }}>
              <Typography
                sx={{ p: 5 }}
                variant="h2"
                dangerouslySetInnerHTML={{ __html: paper }}
              />
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
