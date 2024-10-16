import React from 'react'
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Recipes from './pages/Recipes/Recipes.jsx';
import Details from './pages/Details/Details.jsx';
import './App.css'

function App() {
  

  return (
    <>
     <Router>
      <div>
        <Routes>
        <Route path="/*" element={<Navigate replace to="/recipes" />} />
          <Route 
            path="/recipes/*"
            element={<Recipes />} />
          <Route 
            path="/recipes/:id" 
            element={<Details />} />
        </Routes>
      </div>
    </Router> 
    </>
  )
}

export default App
