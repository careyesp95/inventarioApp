import {
    GET_PRODUCT_ALL,
    GET_PROCESS_ALL,
    FILTER_BY_ORDER,
    FILTER_BY_PROCESS,
    CREATE_PRODUCT,
    CLEAR_ALL,
} from '../actions/actionName';

const initialState = {
    allProducts :[],
    allProductsAux:[],
    allProcess:undefined,
}

function reducer(state=initialState,action) {
    switch(action.type){
        case GET_PRODUCT_ALL:
            return {
                ...state,
                allProducts:action.payload,
                allProductsAux:action.payload,
                
            };

        case GET_PROCESS_ALL:
            return {
                ...state,
                allProcess:action.payload,
            };

        case CREATE_PRODUCT:
            return {
                ...state,
            }
        case FILTER_BY_ORDER:

            let sortedOrder = action.payload === 'asc' ?
            state.allProducts.sort(function(a,b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1;
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()){
                    return -1;
                }
                return 0;
            })
            : state.allProducts.sort(function(a,b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1;
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()){
                    return 1;
                }
                return 0;
            });
            
        case FILTER_BY_PROCESS: 

            let filterProduct = state.allProductsAux.filter(e => {
                let array = e.process
                return array.some(e => e.name.toUpperCase() === action.payload.toUpperCase())
            })
            
            return {
                ...state,
                allProducts:filterProduct ? filterProduct:state.allProductsAux
            };

        case CLEAR_ALL:
            return{
                ...state,
                allProducts:[...state.allProductsAux]
            }
            
        default:
            return state;
    }
}

export default reducer
