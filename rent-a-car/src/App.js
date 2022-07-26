import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap"; 
import Welcome from './components/Welcome';
import Create from './components/Create';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/navbar';
import About from './components/About'
import Services from './components/Services';
import Slider from './components/Slider';
import Faqs from './components/Faqs';

// import Signup from './components/custsignup';
// import LoginCust from './components/custLogin';

// import DisplayOwnerCar from './components/DisplayOwnerCar';

import PostHeader from './components/PostHeader';
import PostCarForm from './components/Post';

// import CarouselBStrap from "./components2/carslider";
// import Carselectform from "./components2/carselectform";
// import Bookingsteps from "./components2/carcategories";
// import Custcardisplay from "./components2/custcardisplay";



function App() {
  return (
    <Router>
      <div className = "App">
          <div className="content">
          
              <Switch>
                <Route exact path="/">
                    <Navbar/>
                    <Welcome/>
                    <Slider/>
                    <Services/>
                    <About/>
                    <Faqs/>
                    {/* <Footer/> */}
                </Route>

                <Route exact path="/create">
                   <Create/>
                   {/* <Footer/> */}
                </Route>

                <Route exact path="/login">
                   <Login/>
                   {/* <Footer/> */}
                </Route>

                <Route exact path="/post">
                    <PostHeader/>
                    <PostCarForm/>
                </Route>
                {/* <Route exact path="/displayownercar">
                    <DisplayOwnerCar/>
                    <Footer/>
                </Route> */}
                {/* <Route exact path="/custSignup">
                    <Signup/>
                </Route>
                <Route exact path="/custLogin">
                  <LoginCust/>
                </Route>
                <Route exact path= "/custcarselectform">
                  <CarouselBStrap />
                  <Carselectform />
                  <Bookingsteps />
                </Route> 
                <Route path="/custcardisplay">
                  <Custcardisplay />
                </Route> */}

              </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
