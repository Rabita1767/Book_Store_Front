import React from 'react';

const CustomInput = ({ field, errors }) => {
    return (
        <input
            placeholder="Enter email"
            {...field}
            className={`input-field ${errors.email ? "error-border" : ""}`}
        />
    );
};

export default CustomInput;
