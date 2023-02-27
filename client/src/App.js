import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path= "/">
            "Home"
          </Route>
          <Route exact path= "/books">
            "Books"
          </Route>
          <Route exact path= "/reviews">
            "Reviews"   
          </Route>
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
