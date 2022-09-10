import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import Books from './components/Books';
import People from './components/People';
import Help from './components/Help';
import ArticleData from './data/articles.json';
import BooksData from './data/books.json';
import PeopleData from './data/people.json';

import SingleArticle from './components/SingleArticle';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Header />
      <div className="flex">
        <Navbar />

        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/articles" exact>
          <Articles data={ArticleData} />
        </Route>

        <Route path="/books">
          <Books data={BooksData} />
        </Route>
        <Route path="/people">
          <People data={PeopleData} />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/articles/:id" component={SingleArticle} />
      </div>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
