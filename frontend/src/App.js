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





const App = () => {
  return (
    <Router>
    <Header/>
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/Cours/:id' component={CoursScreen}/>
          <Route path='/Courses' component={CoursesScreen} exact/>
          <Route path='/About' component={AboutScreen} exact/>
          <Route path='/Contact' component={ContactScreen} exact/>
          <Route path='/Login' component={LoginScreen} exact/>
         
        </Container>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;

