import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';

function C02Tile() {
    const [latestPpm, setLatestPpm] = useState("");
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_daily_mlo.txt';

    useEffect(() => {
        fetch(proxyUrl + targetUrl)
          .then(response => response.text())
          .then(data => {
            // The data is space-separated, so we'll split it into lines
            // and then split each line into fields.
            const lines = data.trim().split('\n');
            const lastLine = lines[lines.length - 1];
            const fields = lastLine.split(/\s+/);
    
            // The fifth field is the daily mean CO2 in ppm.
            setLatestPpm(fields[5]);
          });
      }, []);

    return ( 
        <Paper elevation={3} style={{ margin: '10px', padding: '20px', width: '25vh', height: '25vh' }}>

          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: latestPpm }}
          />
        
      </Paper>
     );
}

export default C02Tile;