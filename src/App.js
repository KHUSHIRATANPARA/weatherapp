import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Weather from './Components/Weather';
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Components/Header';
import Search from './Components/Search';
import Result from './Components/Result';
import Loader from './Components/Loader';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
         <Route path="/"  element={<Home/>} />
         <Route path="/weather"  element={<Weather/>} />
         <Route path="/loader"  element={<Loader/>} />
         {/* <Route path="/Recent"  element={<Recent/>} /> */}
         <Route path="/Result"  element={<Result/>} />
         <Route path="/Search"  element={<Search/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
