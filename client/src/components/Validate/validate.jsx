export function validate(state){
    let errors = {};
    let expression = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

    if(!state.name){
        errors.name = 'name is required';
    }else if(!/^\w+\s?\w+?\s?\w+?\s?\w+?\s?$/.test(state.name)){
        errors.name = 'Debe contener más de 3 caracteres y como maximo 3 espacios'
    }else if (!expression.test(state.image)){
        errors.image = 'La URL es invalida'
    }
    return errors;
}