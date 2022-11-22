import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {

  async function FetchProducts() {
    // const response = await fetch('http://localhost:5000/products')
    // console.log(response)
    // setProducts({...products, all: await response.json()})
  }
  

  useEffect(() => {
    FetchProducts()
  }, [])

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
