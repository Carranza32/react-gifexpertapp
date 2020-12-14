import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

export const AddCategory = ({setCategories}) => {
   const [inputValue, setInputValue] = useState('');

   const handleInputChange = (e) => {
      setInputValue(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim().length <= 2) return;

      setCategories(cats => [inputValue, ...cats]);
      setInputValue('');
   }

   return (
      <div>
         <h1>{inputValue}</h1>
         <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField 
               id="outlined-basic"
               type="text" 
               value={inputValue}
               onChange={handleInputChange}
               variant="filled"
               label="Categoria"
               fullWidth
            />
         </form>
      </div>
   )
}

AddCategory.protoTypes = {
   setCategories: PropTypes.func.isRequired
}