import ImageHeader from './Component/ImageHeader';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
import Quote from './Component/Quote';

function App() {
  return (
    <>
      <ImageHeader />
      <Navbar />
      <Quote />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
