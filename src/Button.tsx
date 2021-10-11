import React from 'react';
import s from './App.module.css'

type ButtonType = {
    callback: () => void
    title: string
    count: number
}

export const Button = (props: ButtonType) => {

    return (
        <div>
            <button
                className={s.button}
                onClick={props.callback}
                disabled={(props.count === 5 && props.title === 'inc') || (props.count === 0 && props.title === 'reset')}
            >{props.title}</button>
        </div>
    )
}