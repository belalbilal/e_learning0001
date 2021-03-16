import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import CoursScreen from './screens/CoursScreen'
import CoursesScreen from './screens/CoursesScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfilScreen from './screens/ProfileScreen';
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'





const App = () => {
  return (
    <Router>
    <Header/>
      <main className="py-3">
        <Container>
          <Route path='/Cours/:id' component={CoursScreen}/>
          <Route path='/Courses' component={CoursesScreen}/>
          <Route path='/About' component={AboutScreen} />
          <Route path='/Contact' component={ContactScreen} />
          <Route path='/Login' component={LoginScreen} />
          <Route path='/Profile' component={ProfilScreen} />
          <Route path='/admin/Register' component={RegisterScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/' component={HomeScreen} exact/>
         
        </Container>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;

