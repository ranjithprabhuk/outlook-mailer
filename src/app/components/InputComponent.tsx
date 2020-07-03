import * as React from 'react';

const InputComponent: React.SFC<any> = (props: any) => (
    <div className='form-group'>
        <label>{props.label}</label>
        <input
            className={props.meta.error && props.meta.touched ? 'form-control is-invalid' : 'form-control'}
            {...props.input}
            type={props.type}
            placeholder={props.placeHolder}
            max={props.max}
            min={props.min}
            step={props.step}
            disabled={props.disabled}
        />
        {props.meta.touched && <div className='invalid-feedback'>{props.meta.error}</div>}
    </div>
);

export default InputComponent;
