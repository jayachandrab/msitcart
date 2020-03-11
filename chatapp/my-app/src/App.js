import React from 'react';
import ReactDom  from 'react-dome';
import {'BrowserRouter' as Router,Route} from 'react-router-dom';
const App = ()=>(
  <Router>
  <Route paht="/" exact component={Join} />
    <Route paht="/chat" exact component={Chat} />
  </Router>
);
export default App;
