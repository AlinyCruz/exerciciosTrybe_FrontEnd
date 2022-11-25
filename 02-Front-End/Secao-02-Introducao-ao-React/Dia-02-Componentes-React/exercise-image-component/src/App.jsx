import './App.css';
import Image from './Image';
import staringCat from './staringCat.jpg';

function App() {
  return (
    <main style={ {fontFamily: ''} }>
     <Image source={ staringCat } alternativeText="Cute cat staring" />
    </main>
  );
}
export default App;
