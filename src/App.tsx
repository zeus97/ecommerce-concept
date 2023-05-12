import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/electronics' element={<HomePage />} />
          <Route path='/jewelery' element={<HomePage />} />
          <Route path='/mens-clothing' element={<HomePage />} />
          <Route path='/womens-clothing' element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
