import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Owner from './pages/Owner'



export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/owner' element={<Owner />} />
            </Routes>
        </BrowserRouter>
    )
}