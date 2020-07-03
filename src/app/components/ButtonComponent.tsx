import * as React from 'react';

export interface IButtonComponent {
    text: string;
    value?: any;
    className?: string;
    onClick?: any;
}

const ButtonComponent: React.SFC<IButtonComponent> = (props: IButtonComponent) => (
    <button className='btn btn-outline-primary' type='button' {...props}>
        {props.text} {props.value && <span className='badge badge-light'>{props.value}</span>}
    </button>
);

export default ButtonComponent;
