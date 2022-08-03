import React, {ChangeEvent} from "react";
import {Button} from "./Button";


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
        <div className={"app"}>
            <div className={'tableWrapper'}>
                <div className={'input'}>

                    <div>
                        <span className={"inputText"}>min value: </span>
                        <input
                            className={props.isError ? "input-error" : "input-line"}
                            type={"number"}
                            onChange={updateMinValueHandler}
                            value={props.minValue}
                        />
                    </div>
                    <div>
                        <span className={"inputText"}>max value: </span>
                        <input
                            className={props.isError ? "input-error" : "input-line"}
                            type={"number"}
                            onChange={updateMaxValueHandler}
                            value={props.maxValue}
                        />
                    </div>
                </div>
                <div className={'buttons'}>
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