import React, { Component } from 'react';
import './App.css';
import TrendGit from './TrendGit';

const TRENDS_API_URL = 'https://github-trending-api.now.sh/repositories';

class App extends Component {
  state = {
    repo: [],
    toError: false,
  }

  countResult = (rst, rp) => {
    const repo = rst.map(function (item, index) {
      item.date = rp[index];
      return (
        item
      )
    }
    )
    //console.log(rp);
    this.setState({ repo })
  }

  fetchDate = async (rest) => {
    const dateCommit = rest.map(async function (item) {
      const res = await fetch(`https://api.github.com/repos/${item.author}/${item.name}/commits?page=1&per_page=1`);
      const resu = await res.json();
      if (resu.hasOwnProperty("0")){
        return (
          //resu[0].commit.committer.date.substr(0,10)
          `${resu[0].commit.committer.date.substr(0,10)} ${resu[0].commit.committer.date.substr(11,5)}`
          //resu.message
          //console.log(resu)
        )
      }
      else{
        return (
          //resu[0].commit.committer.date.substr(0,10)
          //`${resu[0].commit.committer.date.substr(0,10)} ${resu[0].commit.committer.date.substr(11,5)}`
          resu.message
          //console.log(resu)
        )
      }
    }
    )
    Promise.all(dateCommit).then((result) => this.countResult(rest, result));
    //this.setState({ repo });
    //this.countResult(rest, repo);
  }

  fetchRepos = async () => {
    const res = await fetch(TRENDS_API_URL);
    const result = await res.json();
    //App.cssthis.setState({ result });
    this.fetchDate(result);
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
    const repo = this.state;
    return (
      <div className="App">
        <header className="App-header">
          < TrendGit data={repo} />
          {console.log(this.state.repo)}
        </header>
      </div>
    );
  }
}

export default App;
