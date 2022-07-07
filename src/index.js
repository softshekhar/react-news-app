import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/Header';
import * as serviceWorker from './serviceWorker';

import NavigationBar from './NavigationBar/NavigationBar';

import TopStories from './TopStories/TopStories';
import TopicBasedNews from './TopicBasedNews/TopicBasedNews';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="news-app-container">
        <Header />
        <div className="news-container">
          <NavigationBar />
          <div className="news-section">
            <Switch>
              <Route path="/topstories" component={TopStories} />
              <Route path="/topics/:name" component={TopicBasedNews} />
              <Route path="*">
                <Redirect to={'/topstories'} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
