import React from "react";


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
            className={props.buttonDisabled ? "button-disabled" : "button"}
        >
            {props.buttonValue}
        </button>
    );
}