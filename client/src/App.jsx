import './App.css'
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage/>} />
    </Routes>
  )
}

export default App
