import './App.css';
import images from './assets/images.jpeg'
import me from './assets/me.png'
import Hero from './components/Hero/Hero';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import {navbarLinks} from './components/navbar/Navbar'
import Footer from './components/Footer/Footer';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Hero imageSrc={me}/> 
      <h1>hello</h1>
      <div className='cloud-one'>hh</div>
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
