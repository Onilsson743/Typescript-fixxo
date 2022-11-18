import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
