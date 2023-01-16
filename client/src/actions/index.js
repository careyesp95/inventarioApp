import {
    GET_PRODUCT_ALL,
    GET_PROCESS_ALL,
    FILTER_BY_ORDER,
    FILTER_BY_PROCESS,
    CREATE_PRODUCT,
    CLEAR_ALL,

} from './actionName.js';
import axios from 'axios';

export const getProductAll = function(){
    return function (dispatch){
        return axios.get('http://localhost:3001/products/')
        .then(response => {
            dispatch({
                type:GET_PRODUCT_ALL,
                payload:response.data
            })
        })
        .catch(err => {
            if(err.response?.status !== 404) alert('cargando products')
        })
    }
}

export const getProcessAll = function(){
    return function(dispatch){
        return axios.get('http://localhost:3001/process/')
        .then(response => {
            dispatch({
                type:GET_PROCESS_ALL,
                payload:response.data
            })
        })
        .catch(err => {
            if(err.response?.status !== 404) alert('cargando process')
        })
    }
}

export const createProduct = function(data){
    return function(dispatch){
        return axios.post('http://localhost:3001/products/', data)
            .then(response => {
                dispatch({
                    type: CREATE_PRODUCT,
                    payload: response.data
                })
            })
            .catch(err => {
                alert('error en la creacion del producto', err)
            })
        
    }
}

export const filterByOrder = function(status){ 
    return {
        type:FILTER_BY_ORDER,
        payload:status,
    }

}

export const filterByProcess = function(status){
    return {
        type:FILTER_BY_PROCESS,
        payload:status
    }
}

export const clearAll = function() {
    return {
        type:CLEAR_ALL,
    }

}