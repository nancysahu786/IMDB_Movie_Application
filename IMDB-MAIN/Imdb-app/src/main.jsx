import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import WatchListPage from './pages/WatchListPage.jsx'
import MovieDetailsPage from './pages/MovieDetailsPage.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* <App /> */}
      {/* list page */}
      {/* <MovieListPage /> */}

      {/* details page  */}
      {/* <MovieDetailsPage /> */}

      {/* watch list page */}
      {/* <WatchListPage /> */}
      <Header />
      <Routes>
        {/* list page */}
        <Route path='/' element={<MovieListPage />} />

        {/* details page  */}
        <Route path='/details' element={<MovieDetailsPage />} />

        {/* watch list page */}
        <Route path='/watchList' element={<WatchListPage />} />
        <Route path='*' element={<h1>Page not found </h1>} />

      </Routes>

    </StrictMode>
  </BrowserRouter>

)
