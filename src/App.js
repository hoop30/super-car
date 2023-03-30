import './App.scss';
import Home from './pages/Home';
import NavBar from 'components/NavBar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Route, Routes } from 'react-router-dom';
import Services from 'pages/Services';
import Contact from 'pages/Contact';
import About from 'pages/About';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
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
