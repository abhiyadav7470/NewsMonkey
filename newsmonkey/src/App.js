import './App.css';
import Apicall from './components/Apicall';
import Articlecart from './components/Articlecart';
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const[product, setproduct]=useState({
    product:[]
  });

  useEffect(()=>{axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=8cd8e6dc58e84bc1a718ed806eb7311d`).then((response)=>{
      setproduct({...product,product: response.data.articles});
  },err=>{
      console.log(err);
  })

  },[])
  return (
    <div className="App">
            <div className='conta'>
      <Navbar/>
      <Articlecart productsl={product.product}/>

      </div>
    </div>
  );
}

export default App;
