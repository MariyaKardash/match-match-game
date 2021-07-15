import React from 'react'
import { 
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import WelcomePage from './pages/Welcome';
import { CongratulationsPage } from './pages/Congratulations';
import GamePage from './pages/Game';
import { NotFoundPage } from './pages/NotFound';
import { ProfilePage } from './pages/Profile';
import { RecordsPage } from './pages/Records';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact><Redirect to="/welcome"/></Route>
        <Route path='/welcome' component={WelcomePage}/>
        <Route path='/profile' component={ProfilePage}/>
        <Route path='/game' component={GamePage}/>
        <Route path='/congratulations' component={CongratulationsPage}/>
        <Route path='/records' component={RecordsPage}/>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;