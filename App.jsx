
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Blogs from './blogs';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Blogs />} />
        <Route path="/post/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;