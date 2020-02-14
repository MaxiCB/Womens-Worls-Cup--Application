import React, {useEffect, useState} from 'react';
// Router
import {Route, BrowserRoute as Router} from 'react-router-dom';
// Axios
import axios from 'axios';
// Custom Hooks
import { useLocalStorage} from './hooks/useLocalStorage';
// Components


const App = () => {

  const [playerData, setPlayerData] = useState();

  useEffect(() => {
    // Implement axios call here
    // {country, id, name, searches}
    axios.get('http://localhost:5000/api/players')
      .then(res => setPlayerData(res.data))
      .catch(err => console.log(err))
  })

  return (
    <div className="App">

    </div>
  );
}

export default App;
