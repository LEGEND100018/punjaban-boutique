import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './screens/Home'
import Test from './screens/test'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home/" element={<Home/>}/>
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
