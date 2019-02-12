import React, { Component } from 'react';
import './App.css';
import TrendGit from './components/TrendGit';

const TRENDS_API_URL = 'https://github-trending-api.now.sh/repositories';

class App extends Component {
  state = {
    repo: [],
    isError: false,
  }

  countResult = (repositories, date) => {                        // добавляем в массив с репозиториями элемент date (дата коммита)
    const repo = repositories.map((item, index) => {
      item.date = date[index];
      return item;
    })
    //console.log(rp);
    this.setState({ repo })
  }

  fetchCommitDate = async (repositories) => {                    // получаем даты для всех репозиториев из массива
    const dateCommit = repositories.map(async function (item) {
      const res = await fetch(`https://api.github.com/repos/${item.author}/${item.name}/commits?page=1&per_page=1`);
      const result = await res.json();
      let printResult = "";
      try {
        printResult = `${result[0].commit.committer.date.substr(0, 10)} ${result[0].commit.committer.date.substr(11, 5)}`;
      } catch {
        printResult = result.message; // API rate limit exceeded for %IP% (But here's the good news: Authenticated requests get a higher rate limit...
      }
      return printResult;
    })
    const date = await Promise.all(dateCommit);
    this.countResult(repositories, date);                       // передаем два массива с репозиториями (repositories) и датами коммитов (date) в countResult
    //Promise.all(dateCommit).then(date => this.countResult(repositories, date)); 
    //this.setState({ repo });
    //this.countResult(rest, repo);
  }

  fetchRepos = async () => {                                    // получаем массив с репозиториями
    const res = await fetch(TRENDS_API_URL);
    const result = await res.json();
    //App.cssthis.setState({ result });
    this.fetchCommitDate(result);
  };

  componentDidMount() {
    try {
      this.fetchRepos();
    } catch (error) {
      console.error(error);
      this.setState({ isError: true });
    }
  }

  render() {
    const repo = this.state;
    return (
      <div className="App">
        <header className="App-header">
          < TrendGit data={repo} />
        </header>
      </div>
    );
  }
}

export default App;