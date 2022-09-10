import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory ) => {
        // setCategories( categories.push('Categoria') ) No se usa pues push se usa para mutar
        if ( categories.includes( newCategory ) ) return;
        setCategories( [ newCategory, ...categories ] );
        //setCategories( cat => [ ...cat, 'Mario' ] );
    }
    
    const onDeleteCategory = ( category ) => {
      if ( categories.includes( category ) ) {
        setCategories( categories.filter(function(i) { return i !== category }) );
      };
    }

    return (
      <>
        <h1>GifExpertApp</h1>
        <AddCategory 
          //setCategories={ setCategories }
          onNewCategory={ (value) => onAddCategory(value) } // onNewCategory={ onAddCategory }
        />
          
        { 
            categories.map( category => ( //Equivalente a tener un return 
                    <GifGrid key={ category } category={category} onDeleteCategory={onDeleteCategory}/>
                )
            ) 
        }
      </>
    )
}
