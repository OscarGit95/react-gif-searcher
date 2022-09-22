import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Radiohead']);

    const onAddCategory = (newCategory) => {
      if( categories.find(category => category.toLocaleLowerCase() === newCategory.toLocaleLowerCase()) ) return;
      setCategories([newCategory, ...categories]);
    }

    return (
      <>
          <h1>GifExpertApp</h1>
          <AddCategory
            onNewCategory={ onAddCategory }
          />
          <ol>
             {
              categories.map(( category ) => (
                <GifGrid
                  key={ category }
                  category={ category } />
              ))
             }
          </ol>
      </>
    )
}
