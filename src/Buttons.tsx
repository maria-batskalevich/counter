import React from 'react';
import s from './App.module.css'
import {Button} from "./Button";

type ButtonsPropsType = {
    count: number
    changeValue: () => void
    resetValue: () => void
}

export const Buttons = (props: ButtonsPropsType) => {
    return (
        <div className={s.buttons}>

            <Button callback={props.changeValue} count={props.count} title={'inc'}/>
            <Button callback={props.resetValue} count={props.count} title={'reset'}/>

        </div>
    )
}
