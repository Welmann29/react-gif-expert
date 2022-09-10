import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    };

    useEffect( () => { //El use effect me ayuda a ejecutar acciones solo en la primera renderizacion, o
        // se pueden asignar acciones para un rellamado
        getImages();
    }, [ ]);

    return {
        images: images,
        isLoading: isLoading
    }
};
