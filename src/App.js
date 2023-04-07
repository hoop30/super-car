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
          <Route path="/super-car" element={<Home />}/>
          <Route path="/super-car/gallery" element={<Gallery />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
