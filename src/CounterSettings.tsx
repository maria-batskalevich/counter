import React, {ChangeEvent} from "react";
import {Button} from "./Button";
import s from './App.module.scss'


type CounterSettingsPropsType = {
    minValue: number;
    maxValue: number;
    setNewMinValue: (newMinValue: number) => void;
    setNewMaxValue: (newMaxValue: number) => void;
    isCounting: boolean;
    isError: boolean;
    setValues: () => void;
};

export function CounterSettings(props: CounterSettingsPropsType) {
    const updateMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setNewMaxValue(event.currentTarget.valueAsNumber);
    };
    const updateMinValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setNewMinValue(event.currentTarget.valueAsNumber);
    };
    const updateBothValuesHandler = () => {
        props.setValues();
    };

    return (
        <div className={s.app}>
            <div className={s.tableWrapper}>
                <div className={s.input}>

                    <div>
                        <span className={s.inputText}>min value: </span>
                        <input
                            className={props.isError ? s.inputError : s.inputLine}
                            type={'number'}
                            onChange={updateMinValueHandler}
                            value={props.minValue}
                        />
                    </div>
                    <div>
                        <span className={s.inputText}>max value: </span>
                        <input
                            className={props.isError ? s.inputError : s.inputLine}
                            type={"number"}
                            onChange={updateMaxValueHandler}
                            value={props.maxValue}
                        />
                    </div>
                </div>
                <div className={s.buttons}>
                    {props.isCounting ? (
                        <Button
                            buttonValue={"set"}
                            buttonDisabled={true}
                            onClickHandler={updateBothValuesHandler}
                        />
                    ) : (
                        <Button
                            buttonValue={"set"}
                            buttonDisabled={props.isError}
                            onClickHandler={updateBothValuesHandler}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}