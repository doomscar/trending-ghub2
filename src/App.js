import React, { Component } from 'react';
import './App.css';
import TrendGit from './TrendGit';

const TRENDS_API_URL = 'https://github-trending-api.now.sh/repositories';

/*function printError(e){
  console.error(e);
  this.setState({toError: true});
}*/

/*
const url = "https://api.github.com/repos/" + it.author + "/" + it.name + "/commits?page=1&per_page=1";
      const res = await fetch(url);
      js = await res.json();
      //console.log(js);
      //console.log(js[0].commit.author.date + "121221");
      return js[0].commit.author.date;
*/

class App extends Component {
  state = {
    repo: [],
    toError: false,
  }

  fetchRepos = async () => {
    const res = await fetch(TRENDS_API_URL);
    const repo = await res.json();
    this.setState({ repo });
  };
  
  componentDidMount() {
    try {
      this.fetchRepos();
    } catch (error) {
      console.error(error);
      this.setState({ toError: true });
    }

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
