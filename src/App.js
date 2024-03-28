import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filterText: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users, filteredMonsters: users };
        });
      });
  }

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={(event) => {
            this.setState({ filterText: event.target.value });
          }}
        />
        {this.state.monsters.map((monster) => {
          if (monster.name.toLowerCase().includes(this.state.filterText.toLowerCase())) {
            return (
              <div key={monster.id}>
                <h1> {monster.name} </h1>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default App;
