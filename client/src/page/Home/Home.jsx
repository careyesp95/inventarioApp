import React, {useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Navbar from '../../components/Navbar/Navbar.js'
import Card from '../../components/Card/Card';
import Paginado from '../../components/Paginado/Paginado.jsx';
import {
    filterByOrder,
    filterByProcess,
    getProcessAll,
    getProductAll,
    }from '../../actions/index';
import {ButtonClear} from './HomeElements'
import './Home.css';

function Home() {
    const stateProduct = useSelector(state => state.allProducts);
    const stateProcess = useSelector(state => state.allProcess);

    const dispatch = useDispatch();

    const [orden,setOrden] = useState('');
    const [dataBase, setDataBase] = useState('');
    const [process,setProcess] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const [product,setProduct] = useState(7);
    const indexOfLastProduct = currentPage * product;
    const indexOfFirstProduct = indexOfLastProduct - product;
    const currentProduct = stateProduct?.slice(indexOfFirstProduct,indexOfLastProduct)

    console.log('esto es lo que estoy imprimiendo', stateProduct)
    
    
    function paginado (pageNumber){
        setCurrentPage(pageNumber)
    }
    
    useEffect(()=> {
        dispatch(getProcessAll())
    },[dispatch])

    function handleFilterOrder(e){
        dispatch(filterByOrder(e.target.value))
        setCurrentPage(1)
        setOrden( e.target.value)
        
    } 

   function clearFilter (e){
       e.preventDefault();
       setOrden('selec')
       setProcess('Entrada')
       dispatch(getProductAll());       
   }


    return (
        <div className='containerHome'>
            <Navbar />
            <br/>
            <div className='containerFilter'>
                <select className='containerOption' name='orden' value={orden} onChange={e => handleFilterOrder(e)} >
                        <option value='selec'>selec</option>
                        <option  value='asc'>Order A-Z</option>
                        <option  value='desc'>Order Z-A</option>
                </select>
                <ButtonClear onClick={clearFilter}>Clear</ButtonClear>
            </div> 
            <Paginado 
                productPerPage={product}
                allProduct={stateProduct?.length}
                paginado={paginado}
            />
            <br/>
            <br/>
            <div className='containerCard'>
                {
                    currentProduct && currentProduct.map(elem => {
                        return <Card
                        key={elem.id}
                        id={elem.id}
                        name={elem.name}
                        image={elem.image}
                        process={elem.processes}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Home
