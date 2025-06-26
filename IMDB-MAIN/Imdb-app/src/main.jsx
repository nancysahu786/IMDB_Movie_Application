import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'

import { AuthProvider } from './AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  //   <StrictMode>
  //     {/* <App /> */}
  //     {/* list page */}
  //     {/* <MovieListPage /> */}

  //     {/* details page  */}
  //     {/* <MovieDetailsPage /> */}

  //     {/* watch list page */}
  //     {/* <WatchListPage /> */}
  //     <Header />
  //     <Routes>
  //       {/* list page */}
  //       <Route path='/' element={<MovieListPage />} />

  //       {/* details page  */}
  //       <Route path='/details' element={<MovieDetailsPage />} />

  //       {/* watch list page */}
  //       <Route path='/watchList' element={<WatchListPage />} />
  //       <Route path='*' element={<h1>Page not found </h1>} />

  //     </Routes>

  //   </StrictMode>
  // </BrowserRouter>

  // <StrictMode>
  //     <App /> 
  // </StrictMode>

  // <BrowserRouter>
  // <StrictMode>
  //   <Routes>
  //     <Route path='login' element={<Login />} />
  //     <Route path='signup' element={<Signup />} />

  //   </Routes>

  // </StrictMode>
  // </BrowserRouter>

  <StrictMode>
    <AuthProvider>
    <App />
  </AuthProvider>
  </StrictMode>
  

)
