import React from 'react';
import logo from './logo.svg';
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
        <article className="content">
            <h1> Welcome to Watch with Me! </h1>
        </article>
      </div>
    );
  }
}

export default App;
