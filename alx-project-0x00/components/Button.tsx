import { ButtonProps } from '@/interfaces';
import React from 'react';

const Button: React.FC<ButtonProps> = ({title, styles}) => {
    return (
    <button className={`bg-blue-300 text-white px-4 py-2 ${styles}`}>
        {title}
    </button>
)
}
export default Button; //button component that accepts title and styles as an argument.