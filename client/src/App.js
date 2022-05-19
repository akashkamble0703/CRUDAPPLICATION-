import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import {Routes, Route } from "react-router-dom";
import Edit from './components/Edit';
import Detail from './components/Detail';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/edit/:id' element={<Edit/>} />
      <Route path='/view/:id' element={<Detail/>} />
    </Routes>
    </>
  );
}

export default App;
