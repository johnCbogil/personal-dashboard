import { Grid, Container } from '@mui/material';
import Tile from './Components/Tile';

const serviceList = [
  "422.61 ppm",
  "The ultimate, hidden truth of the world is that it is something that we make, and could just as easily make differently.<br><br>-David Graeber",
  "Lorem ipsum dolor sit amet",
  "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  "image",
  "12345 xyz",
  "Sed ut perspiciatis unde omnis",
  "Neque porro quisquam est"
];

function App() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item>
          {serviceList.slice(0, 4).map((content, index) => (
            <Tile key={index} content={content} index={index}/>
          ))}
        </Grid>
        <Grid item>
          {serviceList.slice(4).map((content, index) => (
            <Tile key={index} content={content} index={index}/>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
