import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CartPage from './pages/CartPage/CartPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import DetailPage from './pages/DetailPage/DetailPage';
import Header from './components/Header/Header';
import './style.scss';
import { useEffect } from 'react';
import { useCategoryStore } from './store/store';

function App() {
  const getCategories = useCategoryStore(s => s.getCategories);

  useEffect(()=>{
    getCategories();
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/category/:category' element={<CategoryPage />} />
        <Route path='/product/:id' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
