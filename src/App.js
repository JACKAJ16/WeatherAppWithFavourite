import React from 'react';
import HomePage from './components/HomePage/HomePage';
import Info from './components/Info/Info';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/info' component={Info} />
        </Switch>  
      </Router>
     </Provider> 
  );
}

export default App;
