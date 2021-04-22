import React from 'react';
import './App.css';

import { Header, Footer, Home } from './components/portfolio';

import { DataStructureVisualizer } from './components/data_structure_visualizer';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/portfolio/dijkstra">
          <DataStructureVisualizer/>
        </Route>
        <Route path="/portfolio">
          <Home/>
        </Route>
        <Route path="/">
          <Redirect to="/portfolio" />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
