import React from "react";
import s from './App.module.scss'

type ButtonPropsType = {
    buttonValue: string;
    buttonDisabled: boolean;
    onClickHandler: () => void;
};

export function Button(props: ButtonPropsType) {
    return (
        <button
            disabled={props.buttonDisabled}
            onClick={props.onClickHandler}
            className={props.buttonDisabled ? s.buttonDisabled : s.button}
        >
            {props.buttonValue}
        </button>
    );
}