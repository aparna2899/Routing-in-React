import React from 'react';
import { Link } from 'react-router-dom';

class SingleArticle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { id } = this.props.match.params;
    return (
      <main className="singlearticle flex-85">
        <Link to="/articles">👈 Go back to articles</Link>
        <p>The slug of the article is::: {id}!</p>
      </main>
    );
  }
}
export default SingleArticle;
