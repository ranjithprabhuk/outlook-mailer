import * as React from 'react';

const InputComponent: React.SFC = (field: any) => (
    <div className='form-group'>
        <label>{field.label}</label>
        <input
            {...field.input}
            type={field.type}
            placeholder={field.placeHolder}
            max={field.max}
            min={field.min}
            step={field.step}
            disabled={field.disabled}
        />
        {field.meta.touched && <p className='text-danger'>{field.meta.error}</p>}
    </div>
);

export default InputComponent;
