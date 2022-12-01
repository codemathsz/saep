import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Automoveis } from './Automoveis'
import { Home } from './Home'
import { Vender } from './Vender'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/automoveis'>
        <Route path=':id' element={<Automoveis/>} />
      </Route>

      <Route path='/vender'>
        <Route path=':id' element={<Vender />} />
      </Route>
    </Routes>
  )
}
