import React, { Component } from 'react';
import Map from './components/Map.jsx';
import Dashboard from './components/Dashboard.jsx';

class App extends Component {
  render(){
    return(
      <div>
        <Map useVector={true} />
        <Dashboard />
      </div>
    );
  };
};

export default App;