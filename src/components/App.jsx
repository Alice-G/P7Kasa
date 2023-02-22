import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/home'
import FicheLogement from '../pages/ficheLogement'
import APropos from '../pages/aPropos'
import ErrorPage from '../pages/notFound'

function App() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<FicheLogement />} />
            <Route path="/about" element={<APropos />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes>
      </div>
   )
}

export default App
