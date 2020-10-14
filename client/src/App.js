import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import HomepageImage from './components/HomepageImage';

class App extends Component {
  state = {
    response: {}
  };
  
  componentDidMount() {
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <HomepageImage />
        <p>
          Hello from the frontend!
          <br/>
          {this.state.response.body}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;