import './App.css';
import MainPage from './component/MainPage.js';
import Modal from "./component/Modal.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/" element={<Modal/>}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
