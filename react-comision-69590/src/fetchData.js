import { productos } from "./productos";

export const fetchData = (data) => new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve(productos)
    }, 2000)
})