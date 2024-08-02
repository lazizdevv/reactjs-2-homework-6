import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/main-layout"
import { Home } from "./pages/home"
import { Products } from "./pages/products"
import { Cart } from "./pages/cart"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>} />
        <Route path="products" element={<Products/>} />
        <Route path="cart" element={<Cart/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App