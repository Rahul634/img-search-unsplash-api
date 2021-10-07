import './App.css';
import {LoadImages} from './componant/Api'
import Image from './componant/Image'
function App() {
  const data = LoadImages();
  console.log(data);
  return (
    <div className="App">
      {data.map((img) => {
        <Image src={img.urls.thumb} />
      })}
    </div>
  );
}

export default App;
