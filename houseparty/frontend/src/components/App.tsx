import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../pages';
import RoomJoinPage from '../pages/room-join';

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/join" component={RoomJoinPage} />
      </Switch>
    </Router>
  );
};

export default App;
