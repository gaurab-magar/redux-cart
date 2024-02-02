import React from 'react'
import{ Home , ProductsCart , ShoopingCart , PageNotFound } from "../Pages";
import { Routes , Route } from "react-router-dom";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home title='home' />}/>
          <Route path="/products" element={<ProductsCart title='product' />} />
          <Route path="/shooping" element={<ShoopingCart title='shooping' />} />
          <Route path='*' element={<PageNotFound/> } />
      </Routes>
    </div>
  )
}
