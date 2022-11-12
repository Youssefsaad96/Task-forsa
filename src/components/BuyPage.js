import React from 'react'
import BuyProduct from './BuyProduct'
import Footer from './Footer'
import allProducts from './Products'
import Header from './Header'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import ProductsSlider from './ProductsSlider'


function BuyPage() {
  let {id}=useParams();
   let [name,setName]=useState(`${allProducts[id-1].name}`) ;
   let [img,setImg]=useState(`${allProducts[id-1].img}`) ;
   let [price,setPrice]=useState(`${allProducts[id-1].price}`) ; 
   let [inStock,setInStock]=useState(`${allProducts[id-1].inStock}`);
   let [numberOfReviews, setNumberOfReviews] = useState(`${allProducts[id-1].numberOfReviews}`);
   
  
   return (
     <>
       <Header />
       <BuyProduct
         Name={name}
         price={price}
         img={img}
         inStock={inStock}
         numberOfReviews={numberOfReviews}
       />
       <ProductsSlider />
       <Footer />
     </>
   ); 

}

export default BuyPage;