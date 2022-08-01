import React, {Suspense, lazy} from 'react';
import './App.css';
import Loader from './components/Loader/Loader';

const Navbar = lazy(()=>import('./components/Navbar/Navbar'));
const Cover = lazy(()=>import('./components/Cover/Cover'));
const About = lazy(()=>import('./components/About/About'));
const Skills = lazy(()=>import('./components/Skills/Skills'));
const Portfolio = lazy(()=>import('./components/Portfolio/Portfolio'));
const Contact = lazy(()=>import('./components/Contact/Contact'));
const Divider = lazy(()=>import('./components/Divider/Divider'));
const Footer = lazy(()=>import('./components/Footer/Footer'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader></Loader>}>
        <Navbar></Navbar>
        <Cover></Cover>
        <div className='body__app'>
          <About></About>
          <Divider></Divider>
          <Skills></Skills>
          <Divider></Divider>
          <Portfolio></Portfolio>
          <Divider></Divider>
          <Contact></Contact>
        </div>
        <Footer></Footer>
      </Suspense>
    </div>
  );
}

export default App;