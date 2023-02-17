import axios from 'axios';
import { useState } from 'react';
import Articlecart from './Articlecart';

function Apicall(){
    const[product, setproduct]=useState();

        axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=8cd8e6dc58e84bc1a718ed806eb7311d`).then((response)=>{
            setproduct(response.data.articles);
            console.log(product)
        },err=>{
            console.log(err);
        })
       
   
        return(
            <>
                <Articlecart products={product}/>
            </>
        )
  
}

export default Apicall;