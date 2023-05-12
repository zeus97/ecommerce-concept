import axios from 'axios';

const baseUrl = 'https://fakestoreapi.com/';

export const getAllProducts = async ()=>{
    return axios.get(baseUrl + 'products');
     
}

export const getElectronicProducts = async ()=>{
    return axios.get(baseUrl + 'products/category/electronics')
}

export const getJeweleryProducts = async ()=>{
    return axios.get(baseUrl + 'products/category/jewelery')
}

export const getMenClothingsProducts = async ()=>{
    return axios.get(baseUrl + "products/category/men's clothing")
}

export const getWomenClothingsProducts = async ()=>{
    return axios.get(baseUrl + "products/category/women's clothing")
}