import { useState, useEffect } from 'react';
import { Follow } from 'react-twitter-widgets';
import axios from 'axios';

import './App.css';

function App() {
  const [entries, setEntries] = useState(0);
  const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAOIPZgEAAAAAUVorPVlTYpXaoTa008FFWBW%2FbBA%3DOvFtbECGARWul48wSRdKq9eyvfima2KMTqNsa6MmcnMV0nimvl';

  useEffect(() => {
    const handleTwitter = async () => {
      // const followersList = await axios.get('https://catfact.ninja/fact');

      const followersList = await axios.get(
        'https://api.twitter.com/1.1/followers/list.json?cursor=-1&screen_name=Mo__Huzaifa&skip_status=true&include_user_entities=false',
        {
          headers: {
            Authorization:
              'Bearer AAAAAAAAAAAAAAAAAAAAAOIPZgEAAAAAUVorPVlTYpXaoTa008FFWBW%2FbBA%3DOvFtbECGARWul48wSRdKq9eyvfima2KMTqNsa6MmcnMV0nimvl',
          },
        },
      );
      console.log(followersList);
    };

    handleTwitter();
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.8)',
      }}
    >
      <div
        style={{
          width: '40rem',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'white',
          padding: '2rem',
          paddingLeft: '4rem',
          paddingRight: '4rem',
          borderRadius: '0.75rem',
        }}
      >
        <h1>Hubble Diamonds</h1>
        <h1>Giveaway</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '1rem',
            padding: '0.5rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            border: '1px solid black',
          }}
        >
          <h1>{entries}</h1>
          <h4>Your Entries</h4>
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            background: '#FAF9F6',
            padding: '0.5rem',
            marginTop: '2rem',
          }}
        >
          <Follow
            username="HubbleDiamonds"
            options={{ size: 'large', showCount: false }}
          />

          <form
            onSubmit={() => {}}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'start',
            }}
          >
            <p>Twitter Name:</p>
            <input type="text" placeholder="@Mo__Huzaifa" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
