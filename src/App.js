import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Pages/contexts/AuthProvider';
import Drones from './Pages/Home/Drones/Drones';
import Dashboard from './Pages/DashBoard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DroneDetails from './Pages/Home/DroneDetails/DroneDetails';
function App() {
  return (
    <AuthProvider>
      <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/drones'>
          <Drones />
        </Route>
        <PrivateRoute exact path='/drone/:id'>
          <DroneDetails />
        </PrivateRoute>
        <PrivateRoute  path='/dashboard'>
          <Dashboard />
        </PrivateRoute>
      </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
