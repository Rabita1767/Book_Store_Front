import React from 'react';

const InputField = ({ type, name, value, onChange }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default InputField;
