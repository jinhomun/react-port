import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './page/Main'
import Aboutme from './page/Aboutme'
import Home from './page/Home'
import Gsap from './page/Gsap'
import Quiz from './page/Quiz'
import Search from './page/Search'
import Wpoint from './page/Wpoint'
import Vite from './page/Vite'
import Gyobok from './page/Gyobok'
import Youtube from './page/Movie'
import Movie from './page/Movie'
import Contact from './page/Contact'

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<Aboutme />} />
        <Route path='/gsap' element={<Gsap />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/search' element={<Search />} />
        <Route path='/wpoint' element={<Wpoint />} />
        <Route path='/vite' element={<Vite />} />
        <Route path='/gyobok' element={<Gyobok />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Main>
  )
}

export default App