import './App.css';
import images from './assets/images.jpeg'
import save from './assets/save.jpg'
import react from './assets/react_logo.png'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import {navbarLinks} from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Hero imageSrc={save}/> 
      <Slider imgSrc=
      {images} 
      title={'My Name is Jack kinyanjui'} 
      subtitle={'Am a web Developer'}
      />
      <Slider title={'My Tecnologies and Skills'}  flipped={true}/>
  
    </div>
  );
}

export default App;
