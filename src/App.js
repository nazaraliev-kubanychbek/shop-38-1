import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CartPage from './pages/CartPage/CartPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import DetailPage from './pages/DetailPage/DetailPage';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/category/:category' element={<CategoryPage />} />
        <Route path='/produtc/:id' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
