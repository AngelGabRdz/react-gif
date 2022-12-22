import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GiftExpertApp = () => {
    const[ categories, setCategories ] = useState(['One Punch']);
    console.log(categories);
    const addCategory = (newCategory) => {
        console.log(newCategory);
        //categories.push('valorrant');
        if(categories.includes(newCategory)) return;
        setCategories( [newCategory, ...categories] );
        //setCategories( cat => [...cat,'valorant']);
    }
    return(

        <>
          <h1>Gift Expert APp</h1>
        <AddCategory
        // setCategories = { setCategories }
            onNewCategory = {  (value) => addCategory(value) }
        />
       { /*<button onClick={addCategory}>
            Agregar
        </button>*/}
      
  
            {categories.map ( (category,index) => (
                   
                    <>
                  
                    <GifGrid key={category} category={ category }></GifGrid>
                    </>
                ))
            }
     
        </>
    );
}