import React, { Component } from 'react';
import './App.css';
import TrendGit from './TrendGit';

function toJson(data) {
  return data.json();
}

/*function printError(e){
  console.error(e);
  this.setState({toError: true});
}*/

class App extends Component {
  state = {
    repo: null,
    toError: false,
  }

  componentDidMount(){
    fetch('https://github-trending-api.now.sh/repositories').then(toJson).then(data => this.setState({repo: data})).catch(e => {console.error(e); this.setState({toError: true});}); // catch(printError.bind(this)
  }

  render() {
    const data = this.state;
   
    return (
      <div className="App">
        <header className="App-header">
        < TrendGit data={data} />
        </header>
      </div>
    );
  }
}

export default App;
