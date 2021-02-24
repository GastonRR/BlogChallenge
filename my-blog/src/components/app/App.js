import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

/* Pages component */
import DetailPage from '../pages/detail/DetailPage'
import EditionPage from '../pages/form-edition/PageEdition'
import CreationPost from '../pages/form-creation/pageCreation'
import Home from '../pages/home/home'


import NavBar from '../navbar/navbar'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/detail/:id' component={DetailPage}/>
      <Route  path='/create/post' component={CreationPost}/>
      <Route path='/edit/post/:id?' component={EditionPage}/>
      {/* <Route path='*' component={}></Route> */}
    </Switch>
    </div>
  );
}

export default App;
