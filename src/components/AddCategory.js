import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = e => {
        setInputValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(prevCategories => [inputValue, ...prevCategories]);
            setInputValue('');
        };
    };

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                onChange={(e) => handleInputValue(e)}
                type='text'
                value={inputValue}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;