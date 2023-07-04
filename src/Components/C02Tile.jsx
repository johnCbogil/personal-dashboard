import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';

function C02Tile() {
  const [latestPpm, setLatestPpm] = useState("");

  useEffect(() => {
    fetchPPM()
  }, []);

  return (
    <Paper elevation={3} style={{ margin: '10px', padding: '20px', width: '25vh', height: '25vh' }}>
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: latestPpm + " ppm" }}
      />
    </Paper>
  );

  function fetchPPM() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_daily_mlo.txt';

    fetch(proxyUrl + targetUrl)
      .then(response => response.text())
      .then(data => {
        const lines = data.trim().split('\n');
        const lastLine = lines[lines.length - 1];
        const fields = lastLine.split(/\s+/);

        // The fifth field is the daily mean CO2 in ppm.
        setLatestPpm(fields[5]);
      });
  }
}

export default C02Tile;