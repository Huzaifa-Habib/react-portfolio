import './App.css';
import {Route,Routes,Link,Navigate} from "react-router-dom"
import Home from './components/home/home';
import About from './components/home/about/about';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>   
      
    </div>
  );
}

export default App;
