
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/header/Header';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
