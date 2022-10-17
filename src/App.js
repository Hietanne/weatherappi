import './App.css';
import {useEffect, useState} from 'react';
import Weather from './components/Weather';

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setIsLoading] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false);
      }, (error) => {
        alert(error);
      })
    }
    else {
      alert('Your browser does not support geolocation!')
    }

  }, [])
  if (isLoading) {
    return <p>Loading...</p>
  }
  else {
  return (
    <div className="content">
      <h3>Your position</h3>
    <p>
      Position: 
      {lat.toFixed(3)},
      {lat.toFixed(3)}
    </p>
    <Weather lat={lat} lng={lng} />
    </div>
  );
  }
}



export default App;