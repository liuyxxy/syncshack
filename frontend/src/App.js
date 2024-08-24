import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateRoom from './CreateRoom';
import axios from 'axios';

function App() {
  const exampleAxiosRequest = () => {
    axios.get('/api/example-endpoint')
      .then(response => {
        console.log('Data:', response.data);
      })
      .catch(error => {
        console.error('There was an error fetching data!', error);
      });
  };

  return (
    <Router>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>TEMP</h1>
        <Link to="/createroom">
          <button style={{ fontSize: '20px', padding: '10px 20px' }} onClick={exampleAxiosRequest}>
            Create
          </button>
        </Link>
      </div>

      <Routes>
        <Route path="/createroom" element={<CreateRoom />} />
      </Routes>
    </Router>
  );
}

export default App;

