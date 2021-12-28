import React from 'react';
import styles from "./Button.module.css"

type ButtonType = {
    text: string
    disabled? :boolean
}

const Button: React.FC<ButtonType> = ({text, disabled = false}) => {
    return (
        <button disabled={disabled} className={styles.button}>{text}</button>
    );
};

export default Button;
