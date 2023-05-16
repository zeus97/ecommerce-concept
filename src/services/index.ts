import axios from 'axios';


const baseUrl = 'https://fakestoreapi.com';

export const getAllProducts = async ()=>{
    return axios.get(baseUrl + '/products');
     
}

export const getCategory  = async (category:string)=>{
    if(category === '/mens-clothing'){
        category = "/men's clothing";
    }else if(category === '/womens-clothing'){
        category = "/women's clothing";
    }
    return axios.get(baseUrl + `/products/category${category}`)
}



