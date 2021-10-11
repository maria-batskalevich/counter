import React, {useState} from 'react';
import {Counter} from "./Counter";
import {Buttons} from "./Buttons";
import s from './App.module.css'

function App() {
    let [count, setCount] = useState(0)

    let changeValue = () => {
        setCount(count + 1)
    }
    let resetValue = () => {
        setCount(0)
    }
    return (
        <div className={s.container}>
            <div className={s.app}>
                <Counter count={count}/>
                <Buttons count={count}
                         changeValue={changeValue}
                         resetValue={resetValue}
                />
            </div>
        </div>
    )
}

export default App;
