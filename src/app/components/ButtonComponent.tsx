import * as React from 'react';

const ButtonComponent: React.SFC<any> = (props: any) => (
    <button className='btn btn-outline-primary' type='button' {...props}>
        {props.buttonText} {props.value && <span className='badge badge-light'>{props.value}</span>}
    </button>
);

export default ButtonComponent;
