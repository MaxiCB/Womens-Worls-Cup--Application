import React, {useEffect} from 'react';
// Router
import {Route, BrowserRouter as Router} from 'react-router-dom';
// Axios
import axios from 'axios';
// Custom Hooks
import { useLocalStorage} from './hooks/useLocalStorage';
import { useFetch } from './hooks/useFetch';
// Components
import PlayerList from './components/PlayerList';
import PlayerGraph from './components/PlayerGraph';

const App = ({url}) => {

  const [playerData, setPlayerData] = useLocalStorage('players', []);

  // const data = useFetch('http://localhost:5000/api/players', {})
  // setPlayerData(data.response)

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
        <Route exact path='/graph' render={(props) => <PlayerGraph players={playerData}/>}/>
      </div>
    </Router>
  );
}

export default App;
