import React from "react";
import {Button} from "./Button";


type CounterTableauPropsType = {
    value: number;
    maxValue: number;
    minValue: number;
    incValue: () => void;
    resetValue: () => void;
    isCounting: boolean;
    isError: boolean;
};

export function CounterTable(props: CounterTableauPropsType) {
    return (
        <div className={"app"}>
            <div className={'tableWrapper tableClassName'}>
                {props.isCounting ? (
                    <>
                        <div className={'counter'}>{props.value}</div>
                        <div className={'buttons'}>
                            <Button
                                buttonValue={"inc"}
                                onClickHandler={props.incValue}
                                buttonDisabled={props.value === props.maxValue}
                            />
                            <Button
                                buttonValue={"reset"}
                                onClickHandler={props.resetValue}
                                buttonDisabled={props.value === props.minValue}
                            />
                        </div>


                    </>
                ) : (
                    <>
                        <div className={'counter'}>
            <span className={props.isError ? "text-error" : "text-disabled"}>
              {props.isError
                  ? "Incorrect value!"
                  : `Enter values and press "set"`}
            </span>
                        </div>
                        <div className={'buttons'}>

                            <Button
                                buttonValue={"inc"}
                                onClickHandler={props.incValue}
                                buttonDisabled={true}
                            />


                            <Button
                                buttonValue={"reset"}
                                onClickHandler={props.resetValue}
                                buttonDisabled={true}
                            />
                        </div>

                    </>
                )}
            </div>

        </div>
    );
}