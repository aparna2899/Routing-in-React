import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <main className="home flex-85">
        <h2>Welcome to Homepage</h2>
        <ul className="flex flex-between">
          <li className="flex-29">
            <Link to="/articles">ARTICLES PAGE </Link>
          </li>
          <li className="flex-29">
            <Link to="/books">BOOKS PAGE </Link>
          </li>
          <li className="flex-29">
            <Link to="/people">PEOPLE PAGE </Link>
          </li>
        </ul>
      </main>
    );
  }
}

export default App;
