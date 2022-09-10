import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ( { target } ) => {
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    const clearInputValue = inputValue.trim();
    if( clearInputValue.length < 1 ) return;
    // setCategories( categories => [ inputValue, ...categories ] );
    onNewCategory( clearInputValue );
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
