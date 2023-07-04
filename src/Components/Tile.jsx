import { Paper, Typography } from '@mui/material';
import xr from '../xr.png';
import lc from "../lc.png";

function Tile({ content, index }) {
  const src = index == 1 ? xr : lc

  return (
    <Paper elevation={3} style={{ margin: '10px', padding: '20px', width: '25vh', height: '25vh' }}>
      {content === 'image' ? (
        
        <img src={src} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      ) : (
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </Paper>
  );
}

export default Tile;