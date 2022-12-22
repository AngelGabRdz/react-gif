import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue,setInputValue] = useState('One Punch');
    const onInputChange = (event) => {
        console.log(event.target.value);
       //setInputValue('hola world')
       setInputValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        if(inputValue.trim().length <= 1 ) return ;
      //  console.log(setCategories);
        onNewCategory(inputValue.trim());
       //forma vieja de componente procesando todo  setCategories ( categories => [inputValue,...categories]);
        setInputValue('');
        
    }
    return (
        <form onSubmit={  onSubmit }>
            
            <input
                type = "text"
                placeholder="Buscar gifs"
                value = { inputValue }
                onChange = { onInputChange }
            >
           
            </input>
       
        </form>
    );
}