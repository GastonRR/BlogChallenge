import axios from "axios"

const API_URL = 'https://jsonplaceholder.typicode.com/posts/'

const services = {
    create: (title, body) =>{
        return axios.post(API_URL,{
            title,
            body
        })
    },
    edit: (title, body, id)=>{
        return axios.patch(API_URL + `/${id}`,{
            title,
            body
        })
    },
    delete: (id) =>{
       return axios.delete(API_URL+ `/${id}`)
    },
    allPost: () =>{
        return axios.get(API_URL);
    },
    postById: (id) =>{
        return axios.get(API_URL+ `/${id}`)
    },

}
export default services