import './App.css';
import images from './assets/images.jpeg'
import me from './assets/me.png'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import {navbarLinks} from './components/Navbar'
import Footer from './components/Footer';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Hero imageSrc={me}/> 
      <Slider imgSrc=
      {images} 
      title={'My Name is Jack kinyanjui'}
      subtitle={'I am a Junior Developer'}
      />
      <Slider title={'My Tecnologies and Skills'}  flipped={true}/>
      <Footer sided={true}/>
      <Contacts/>
    </div>
  );
}
export default App;
