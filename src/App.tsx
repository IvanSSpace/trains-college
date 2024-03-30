import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './components/pages/MainPage'
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} >
            <Route path="/" element={<Page1 />} />
            <Route path="/two" element={<Page2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
