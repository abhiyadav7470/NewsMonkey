import './App.css';
import Articlecart from './components/Articlecart';
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const[product, setproduct]=useState({
    product:[],
    term: ' '
  });

  useEffect(()=>{axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d794327e19db414abf53cbfc0b341b67").then((response)=>{
    setproduct({...product,product: response.data.articles});
},err=>{
    console.log(err);
});
  },[])

  const getData=(term)=>{axios.get("https://newsapi.org/v2/everything?q=" + term +"&apiKey=d794327e19db414abf53cbfc0b341b67").then((response)=>{
      setproduct({...product,product: response.data.articles});
  },err=>{
      console.log(err);
  })
  }

  const getSearchTerm=(term)=>{
    console.log(term);
    getData(term);
    var element = document.getElementById('row');
    element.removeChild("col-md-card");
  }
  return (
    <div className="App">
      <div className='conta'>
      <Navbar getterm={getSearchTerm}/>
      <div className="row" id='row'>
         <Articlecart productsl={product.product}/>
      </div>

      </div>
    </div>
  );
}

export default App;
