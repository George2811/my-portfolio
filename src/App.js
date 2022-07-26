import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cover from './components/Cover/Cover';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Cover></Cover>
      <About></About>
      <hr></hr>
      <Skills></Skills>
      <hr></hr>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;