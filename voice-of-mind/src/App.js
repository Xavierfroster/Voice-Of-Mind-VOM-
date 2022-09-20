import ImageHeader from './Component/ImageHeader';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Contact from './Component/Contact';
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
import Quote from './Component/Quote';
import AboutUs from './Component/AboutUs';

function App() {
  return (
    <>
      <ImageHeader />
      <Navbar title="Voice Of Mind" />
      <Quote />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Contact.js' element={<Contact />} />
          <Route exact path='/AboutUs.js' element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
