import './App.css';
import images from './assets/images.jpeg'
import save from './assets/save.jpg'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import {navbarLinks} from './components/Navbar'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Hero imageSrc={save}/> 
      <Slider imgSrc=
      {images} 
      title={'My Name is Jack kinyanjui'} 
      subtitle={'Am a Junior Developer'}
      />
      <Slider title={'My Tecnologies and Skills'}  flipped={true}/>
      <Footer sided={true}/>
    </div>
  );
}

export default App;
