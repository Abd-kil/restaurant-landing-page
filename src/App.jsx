import Navigation from '../src/components/navigation/Navigation';
import Home from './sections/home/Home';
import Menu from './sections/menu/Menu';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import { useEffect, useState } from 'react';
function App() {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  }
  const [offset, setOffset] = useState(window.pageYOffset);
  useEffect(() => {
    window.addEventListener('scroll', () => setOffset(window.pageYOffset));
  }, []);
  const scrollUpButtonStyle = {
    position: 'fixed',
    bottom: '15px',
    insetInlineStart: '10px',
    padding: '5px',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    background: '#2e918c',
    transform: 'translateY(0)',
    opacity: '1',
    transition: 'transform 0.3s',
    boxShadow: '0 0 15px 0px #000000aa',
    zIndex: '10'
  };
  const hideScrollUpButtonStyle = {
    opacity: '0',
    transform: 'translateY(15px)',
  };
  return (
    <>
      <Navigation />
      <Home />
      <Menu />
      <About />
      <Contact />
      <button
        onClick={scrollUp}
        style={
          offset < 100 ? hideScrollUpButtonStyle : scrollUpButtonStyle
        }
      >&uarr;</button>
    </>
  );
}

export default App;
