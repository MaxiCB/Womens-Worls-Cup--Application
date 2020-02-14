import React, {useEffect} from 'react';
// Router
import {Route, BrowserRouter as Router} from 'react-router-dom';
// Axios
import axios from 'axios';
// Custom Hooks
import { useLocalStorage} from './hooks/useLocalStorage';
// Components
import PlayerList from './components/PlayerList';


const App = () => {

  const [playerData, setPlayerData] = useLocalStorage('players', null);

  useEffect(() => {
    // Implement axios call here
    // {country, id, name, searches}
    axios.get('http://localhost:5000/api/players')
      .then(res => {setPlayerData(res.data); console.log(res.data)})
      .catch(err => console.log(err))
  }, [])

  return (
    <Router>
      <div className="App">
        {/* Implement routes here as needed */}
        <Route exact path='/' render={(props) => <PlayerList players={playerData}/>}/>
      </div>
    </Router>
  );
}

export default App;
