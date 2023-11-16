import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import contacts from './components/Contact';
import footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header />
      <heroSection />
      <projects />
      <reviews />
      <contact />
    </div>
  );
}

export default App;
