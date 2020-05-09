import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() 
  {
    return (
      <div className="App">
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home"> Watch With Me </Navbar.Brand>
        </Navbar>
        <div className="App-header">
            <h1> Welcome to WatchWithMe! </h1>
        </div>
      </div>
    );
  }
}

export default App;
