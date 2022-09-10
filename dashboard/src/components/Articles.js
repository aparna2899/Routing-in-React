import { Link } from 'react-router-dom';

function Articles(props) {
  return (
    <main className="articles flex-85">
      <input type="search" className="search-box" placeholder="Search" />
      <ul>
        {props.data.map((article) => (
          <li key={article.title}>
            <Link to={`/articles/${article.slug}`}>
              <p>{article.title}</p>
            </Link>
            <span>{article.author}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default Articles;
