import axios from 'axios';

const  findAll =  () => {

    return axios.get("https://backendapi.turing.com/products?limit=9");

}


const findById = id =>{

    return axios.get( "https://backendapi.turing.com/products/"+ id  );
} 

const getAttributes = id => {

    return axios.get("https://backendapi.turing.com/attributes/inProduct/"+ id )
}

const getAttributeList = id => {

    return axios.get("https://backendapi.turing.com/attributes/values/"+id )
}

const products = {
    findAll,
    findById,
    getAttributes,
    getAttributeList
 }

export default products;