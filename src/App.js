import { useState } from 'react';
import './App.css';
import {LoadImages, SearchImages} from './componant/Api'
import Image from './componant/Image'
function App() {
  const [query, setQuery] = useState()
  const [searching, setSearching] = useState()
  const data = LoadImages();
  console.log(query)
  const searchData = SearchImages(searching)
  const  search = () => {
    setSearching(query);
  }
  return (
    <div className="App">
      <div className='app_wrap'>
        <input type="text" placeholder="enter keyword" onChange={(e) => setQuery(e.target.value)}></input>
        <button onClick={search}>Submit</button>
      </div>
      
      <div className="contain">
      {searchData ? searchData.map((img, key) => (
        <Image src={img.urls.thumb} key={key}/>
  )) : data.map((img, key) => (
        <Image src={img.urls.thumb} key={key}/>
  ))}
      </div>
    </div>
  );
}

export default App;
