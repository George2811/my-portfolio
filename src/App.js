import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ContadorHooks from './components/ContadorHooks';
import Cover from './components/Cover/Cover';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Cover></Cover>
      <About></About>
      <hr></hr>
      <Skills></Skills>
      <hr></hr>
      <Footer></Footer>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Come on George JS! Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <ContadorHooks title='Followers'></ContadorHooks>
      </section>
    </div>
  );
}

export default App;