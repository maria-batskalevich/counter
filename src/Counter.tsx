import React from 'react';
import s from './App.module.css'

type countType = {
    count: number
}

export const Counter = (props: countType) => {
    return (
        <div className={s.counter}>
            <span className={props.count === 5 ? s.alarmText : s.text}>{props.count}</span>
        </div>
    )
}
