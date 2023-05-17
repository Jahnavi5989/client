import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, List, ListItem, ListItemText, CircularProgress } from '@mui/material';

const GymPlaylistApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/search', {
          headers: {
          Authorization: 'Bearer BQDmqD7XZcSlZVjpRfSf9LQF4H7Z-DiGF_xy4E00mIDvgla9quzXuhGcz5tvJ-Ck1CHstvZNPbicZqFP49rAduzrwAUYI1uRixxvHwVeQoReIU1u7v69LSJMluCmJinX_C4CMdZCNfc6d1Ca1_lK6Abq_ppnhDbqs0a4K7cpkbIyjah--roTGD61DzX1lt1ywby_nUMZ1uiOv5Mxcbc8uHOxrxwTwygAfveQ51dFhpsSMYB-D2leYx6OPSxaKI1v_90ZfhKWvuvKLh8', // Replace with your Spotify access token
          },
          params: {
            q: 'gym',
            type: 'playlist',
            limit: 3,
          },
        });

        const fetchedPlaylists = response.data?.playlists?.items || [];
        setPlaylists(fetchedPlaylists);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    fetchPlaylists();
  }, []);
console.log(playlists)
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Gym Playlist App
      </Typography>

      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <CircularProgress />
        </div>
      ) : null}

      {!isLoading && playlists.length === 0 && (
        <Typography variant="body1" align="center">
          No gym playlists found.
        </Typography>
      )}

      {!isLoading && playlists.length > 0 &&
        playlists.map((playlist) => (
          <div key={playlist.id} style={{ marginTop: '20px' }}>
            <Typography variant="h6">{playlist.name}</Typography>
            {playlist.tracks && playlist.tracks.items && playlist.tracks.items.length > 0 ? (
              <List>
                {playlist.tracks.items.map((track) => (
                  <ListItem key={track.track.id}>
                    <ListItemText primary={`Song ${track.track.track_number}: ${track.track.name}`} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body1" align="center">
                No tracks found for this playlist.
              </Typography>
            )}
          </div>
        ))
      }
    </div>
  );
};

export default GymPlaylistApp;
