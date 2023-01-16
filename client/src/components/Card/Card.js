import React from 'react';
import {
    CardImage,
    CardProduct,
    Title,
    H3,
    Image,
} from './CardElements';


function Card(props) {
    const {name,image,process} = props;
    return (
            <CardProduct>
                <H3>{name}</H3>
                <CardImage>
                    <Image src={image} alt='Cargando...'  />
                </CardImage>
                <Title>Proceso(s): {<p>{process[0].name}</p>}</Title>
            </CardProduct>
    )
}

export default Card
