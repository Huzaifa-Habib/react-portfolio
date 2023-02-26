import './App.css';
import {Route,Routes,Link,Navigate} from "react-router-dom"
import Home from './components/home/home';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>   
      
    </div>
  );
}

export default App;
