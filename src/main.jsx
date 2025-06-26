import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globalStyles.css'
import App from './assets/Pages/Home/App'
import ProjectsPage from './assets/Pages/Projects/projectsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
