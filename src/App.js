import './App.scss';
import Home from './pages/Home';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import { Route, Routes } from 'react-router-dom';
import Services from 'pages/Services';
import Contact from 'pages/Contact';
import About from 'pages/About';
import Gallery from 'pages/Gallery';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/super-car/home" element={<Home />}/>
          <Route path="/super-car/gallery" element={<Gallery />}/>
          <Route path="/super-car/services" element={<Services />}/>
          <Route path="/super-car/contact" element={<Contact />}/>
          <Route path="/super-car/about" element={<About />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
