import React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Loading from '../loading/loading';
import Resume from '../resume/resume';
const Me = React.lazy(() => import('./../me/me'));
const Projects = React.lazy(() => import('./../projects/projects'));

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<Loading />}>
            <Me />
          </Suspense>
        </Route>
        <Route exact path="/me">
          <Suspense fallback={<Loading />}>
            <Me />
          </Suspense>
        </Route>
        <Route exact path="/projects">
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        </Route>
        <Route exact path="/resume">
          <Suspense fallback={<Loading />}>
            <Resume />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
