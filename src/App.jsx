import './App.css'

import { Routes, Route, Link } from 'react-router-dom'
import ProductsPage from './pages/products/products'
import NotFoundPage from './pages/notfound/not_found'
import ProductPage from './pages/product/product'

function App() {
  return (
    <>
      <Routes>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/product/:id" element={<ProductPage />}/>
        <Route path="/*" element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
