import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Find from './pages/find/find'
import List from './pages/list/list'
import Register from './pages/register/register'
import Result from './pages/result/result'
import Baby from './pages/baby/baby'
import Profile from './pages/profile/profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/find" element={<Find />}></Route>
      <Route path="/list" element={<List />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/result" element={<Result />}></Route>
      <Route path="/baby" element={<Baby />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  )
}

export default App
