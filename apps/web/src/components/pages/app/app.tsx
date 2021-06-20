import styles from './app.module.scss';
import 'tailwindcss/tailwind.css';
import React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const Me = React.lazy(() => import('./../me/me'));
const Projects = React.lazy(() => import('./../projects/projects'));

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Suspense fallback={<div>Loading...</div>}>
            <Me />
          </Suspense>
        </Route>
        <Route path="/projects">
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
