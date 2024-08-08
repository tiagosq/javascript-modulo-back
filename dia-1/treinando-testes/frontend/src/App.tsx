import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TeamDetails from './pages/TeamDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team/:id" element={<TeamDetails />} />
    </Routes>
  )
}

export default App
