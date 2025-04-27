import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Scholarships from './pages/Scholarships'
import About from './pages/About'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './layouts/Navbar'
import Dashboard from './pages/Dashboard'
import Page404 from './pages/Page404'
import ProtectedRoute from './components/ProtectedRoute'
import useAuth from './hooks/useAuth'

function App() {

  const {isAuthenticated, user} = useAuth();
  

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={isAuthenticated?<Dashboard user={user}/>:<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/dashboard' element={isAuthenticated?<Dashboard user={user}/>:<SignIn/>} />
          <Route path='/scholarships' element={isAuthenticated?<Scholarships/>:<SignIn/>} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App