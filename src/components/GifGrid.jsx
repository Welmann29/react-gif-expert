//import { getGifs } from "../helpers/getGifs";
//import { useEffect, useState } from "react";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category, onDeleteCategory }) => {

    const { images, isLoading } = useFetchGifs( category );

    //const [images, setImages] = useState([]);
//
    //const getImages = async() => {
    //    const newImages = await getGifs( category );
    //    setImages( newImages );
    //};
//
    //useEffect( () => { //El use effect me ayuda a ejecutar acciones solo en la primera renderizacion, o
    //    // se pueden asignar acciones para un rellamado
    //    getImages();
    //}, [ ]);

    const deleteCategory = (event) => {
        event.preventDefault();
        onDeleteCategory( category );
    }

    return (
      <>
          <div className="header-category">
            <h3>{ category }</h3>
            <button onClick={ deleteCategory } className="button-delete">Eliminar</button>
          </div>
          

            {
                isLoading && ( <h2>Cargando...</h2> ) 
            }

          <div className="card-grid">
            {images.map( ( image ) => (
                <GifItem key={ image.id } { ...image } /> 
                // En ...image esparce la imagen es decir envia la imagen desestructurada como props idependientes
            ))}
          </div>
      </>
    )
}   
