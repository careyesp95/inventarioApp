import React, {useState,useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

import {useDispatch,useSelector} from 'react-redux';
import {getProcessAll,createProduct,getProductAll} from '../../actions/index';
import {validate} from '../Validate/validate.jsx';
import './CardCreate.css';
import {Link,useHistory} from 'react-router-dom';
import {
    Input,
    InputContainer,
    Label,
    Formulario,
    StylError,
    CenterButton,
    Boton,
    MenssageError,
    Main,
    ButtonR,
    H1,
    Select,
    ButtonProcess,
    Li,
} from './CardCreateElements';

function CardCreate() {
 
    const dispatch = useDispatch();
    const history = useHistory();
    const process = useSelector(state => state.allProcess)
    
    const [formularioValido,setFormularioValido] = useState(true);
    const [errors,setErrors] = useState({})
    const [state, setState] = useState({
        name:'',
        image:'',
        proces:[]
    })

    useEffect(()=> {
        dispatch(getProcessAll())
    },[dispatch])

    function onHandleChange (e){
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
        
        setErrors(validate({
            ...state,
            [e.target.name]:e.target.value,
        }));
    }
    function onHandleSelect(e){
        e.preventDefault();
        state.proces.includes(e.target.value) ? alert(`Ya seleccionaste ${e.target.value}, por favor seleccione otro tipo de process`):
        setState({
            ...state,
            proces:[...state.proces,e.target.value]
        })
    }

    function onHandleDelete(el){
        setState({
            ...state,
            process:state.process.filter(elem => elem !== el)
        })

    }
    
    function onHandleSubmit(e){
        e.preventDefault();
        if(errors.hasOwnProperty('name')){
            setFormularioValido(false);
        }else{
            setFormularioValido(true);
            dispatch(createProduct(state))
            alert(`Product ${state.name} creada con exito!`)
            setState({
                name:'',
                image:'',
                proces:[]
            })
            dispatch(getProductAll());
            history.push('/')
        }
    }
    return (
        <div className='containerCreate'>
            <Main>
                <H1>Ingrese Un Producto!</H1>
                <Formulario onSubmit={onHandleSubmit}>
                    <div>
                        <Label htmlFor='nombre' valido={errors.name} >Nombre*:</Label>
                        <InputContainer>
                            <Input
                                type='text'
                                placeholder='name..'
                                id='nombre'
                                value={state.name}
                                name='name'
                                onChange={onHandleChange}
                                valido={errors.name}
                            />
                        </InputContainer>
                        {
                            errors.name && (
                                <StylError valido={errors.name}>{errors.name}</StylError>
                            )
                        }
                    </div>
                    
                    <div>
                        <Label htmlFor='image' valido={errors.image}>Image:</Label>
                        <InputContainer>
                            <Input
                            type='text'
                            placeholder='Url Image...'
                            id='image'
                            value={state.image}
                            name='image'
                            onChange={onHandleChange}
                            valido={errors.image}
                            />
                            
                        </InputContainer>
                        {
                            errors.image && (
                                <StylError valido={errors.image}>{errors.image}</StylError>
                            )
                        }
                    </div>
                    <Label valido={errors.process}>Proceso Type Selected:</Label>
                    <Select
                    onChange={onHandleSelect}>
                        {
                            process && process.map(e => (
                                <option key={e.id} value={e.name}>{e.name}</option>
                            ))
                        }
                    </Select>
                        <ul>
                            <Li>{
                                    state.proces.map(el =>
                                        <div key={el}>
                                            <Label>{el} <ButtonProcess onClick={()=> onHandleDelete(el)}>x</ButtonProcess></Label>
                                            
                                        </div>
                                    )
                                }
                            </Li>
                        </ul>
                    {formularioValido === false && <MenssageError>
                        <p><FontAwesomeIcon icon={faExclamationTriangle}/><b>Error:</b><b>Por favor complete los campos marcados con * correctamente.</b></p>
                    </MenssageError>} 
                    
                    <CenterButton>
                        { state.name !== "" && <Boton type='submit'>Crear Producto</Boton>}
                        <Link to='/'><ButtonR>Regresar</ButtonR></Link>
                        
                    </CenterButton>
                </Formulario>
            </Main>
        </div>
    )
}

export default CardCreate
