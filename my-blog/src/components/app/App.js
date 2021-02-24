import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

/* Pages component */
import CreationPost from '../pages/form-creation/pageCreation'

import NavBar from '../navbar/navbar'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Switch>
      {/* <Route exact path='/' component={}/> */}
      {/* <Route path='/detail/:id' component={}/> */}
      <Route  path='/create/post' component={CreationPost}/>
      {/* <Route path='/edit/post/:id' component={}/> */}
      {/* <Route path='*' component={}></Route> */}
    </Switch>
    </div>
  );
}

export default App;
