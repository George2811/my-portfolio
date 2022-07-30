import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cover from './components/Cover/Cover';
import About from './components/About/About';
// import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Divider from './components/Divider/Divider';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Cover></Cover>
      <div className='body__app'>
        <About></About>
        <Divider></Divider>
        {/* <Skills></Skills> */}
        <Divider></Divider>
        <Portfolio></Portfolio>
        <Divider></Divider>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;