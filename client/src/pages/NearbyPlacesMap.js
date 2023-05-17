import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

function NearbyPlacesMap() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSearch = () => {
    window.location.href = `https://www.google.com/maps/search/${selectedOption}`;
  };

  return (
    <div>
      <FormControl>
        <InputLabel id="select-label">Select Option</InputLabel>
        <Select
          labelId="select-label"
          id="select-input"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          style={{ minWidth: 200, marginRight: 16 }}
        >
          <MenuItem value="Hospital">Hospital</MenuItem>
          <MenuItem value="Gyms">Gyms</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}

export default NearbyPlacesMap;
