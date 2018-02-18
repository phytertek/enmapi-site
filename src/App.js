import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import RequireAuth from './auth/requireAuth';
import NavBar from './navBar/container';
import RegistrationForm from './auth/registration/registrationForm';
import LoginForm from './auth/login/loginForm';
import MainPage from './mainPage/container';
import StudentAssignment from './mainPage/student/assignment/container';
import ClassPage from './mainPage/class/single/container';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={RequireAuth(MainPage)} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/class/:class" component={RequireAuth(ClassPage)} />
        <Route
          path="/student/assignment"
          component={RequireAuth(StudentAssignment)}
        />
      </Switch>
    </div>
  );
};

export default App;
