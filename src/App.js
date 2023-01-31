import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Movies from './pages/Movies'
import Netflix from './pages/Netflix'
import Player from './pages/Player'
import Signup from './pages/Signup'
import TVShows from './pages/TVShows'
import UserLiked from './pages/UserLiked'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='player' element={<Player/>}/>
        <Route path='/tv' element={<TVShows/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/mylist' element={<UserLiked />}/>
        <Route path='/' element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App