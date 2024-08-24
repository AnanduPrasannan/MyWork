import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'


const App = () => {
  return (
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}>

    </Route>
    <Route path='/product' element={<ProductPage/>}>

    </Route>
  </Routes>
</BrowserRouter>
  )

}

export default App