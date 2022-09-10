import React from 'react';
import { Link } from 'react-router-dom';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }
  handleInput = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    let allPeople = [];
    this.props.data.map((family) => allPeople.push(...family.people));
    let people = [];
    if (!this.state.searchInput) {
      people = allPeople;
    } else {
      for (let i = 0; i < allPeople.length; i++) {
        if (allPeople[i].name.includes(this.state.searchInput)) {
          people.push(allPeople[i]);
        }
      }
    }
    return (
      <main className="flex-85">
        <input
          type="text"
          className="search-box"
          placeholder="Search"
          name="searchInput"
          value={this.state.searchInput}
          onChange={this.handleInput}
        />
        <ul className="flex wrap flex-between">
          {people.map((person) => (
            <li className="card center flex-29">
              <div className="flex flex-align-center">
                <div className="img-box-rounded">
                  <img src={person.image} alt="" />
                </div>
                <h3>{person.name}</h3>
              </div>
              <p>{person.description}</p>
              <Link>Learn More</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
export default People;
