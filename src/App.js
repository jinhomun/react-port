import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './page/Main'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Gsap from './components/work/Gsap'
import Quiz from './components/work/Quiz'
import Search from './components/work/Search'
import Wpoint from './components/work/Wpoint'
import Vite from './components/work/Vite'
import Gyobok from './components/work/Gyobok'
import Youtube from './components/work/Youtube'
import Movie from './components/work/Movie'

const App = () => {
  return (
    <Main>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </Main>
  )
}

export default App