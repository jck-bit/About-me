import './App.css';
import images from './assets/images.jpeg'
import save from './assets/save.jpg'
import Hero from './components/Hero';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Hero imageSrc={save}/> 
      <Slider imgSrc=
      {images} 
      title={'My Name is Jack kinyanjui'} 
      subtitle={'Am a web Developer'}
      />
      <Slider imgSrc={images} title={'hello'} subtitle={'come'} flipped={true}/>
      

    </div>
  );
}

export default App;
