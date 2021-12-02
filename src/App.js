import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Shared/Header/Header';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
       {/* <AuthProvider> */}
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
         
            {/* <Route path="/contactMe">
             <ContactMe></ContactMe>
            </Route> */}
            {/* <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route> */}
            {/* <Route path="*">
              <NotFound></NotFound>
            </Route> */}
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
