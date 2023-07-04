import { Grid, Container } from '@mui/material';
import Tile from './Components/Tile';
import C02Tile from './Components/C02Tile';

const serviceList = [
  "422.61 ppm",
  "image",
  "The ultimate, hidden truth of the world is that it is something that we make, and could just as easily make differently.<br><br>-David Graeber",
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
        {serviceList.map((content, index) => (
          <Grid item xs={6} key={index}>
            {index == 0 ?
              <C02Tile></C02Tile>
              :
              <Tile content={content} index={index} />
            }
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
