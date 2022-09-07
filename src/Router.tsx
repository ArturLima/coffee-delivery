import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { Checkout } from './pages/Checkout'
import { Completed } from './pages/Completed'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/completed" element={<Completed />} />
      </Route>
    </Routes>
  )
}
