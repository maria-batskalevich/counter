import React, {useEffect, useState} from "react";
import "./App.css";
import {CounterSettings} from "./CounterSettings";
import {CounterTable} from "./CounterTable";

export const App = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [isCounting, setIsCounting] = useState<boolean>(false);
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [value, setValue] = useState<number>(minValue);


    useEffect(() => {
        getFromLocalStorage();
        setValue(minValue);
    }, []);

    const setNewMaxValue = (newMaxValue: number) => {
        setIsCounting(false);

        if (newMaxValue < 1 || newMaxValue <= minValue) {
            setIsError(true);
        } else if (newMaxValue >= 1 && newMaxValue > minValue) {
            setIsError(false);
            setMaxValue(newMaxValue);
        }
    };

    const setNewMinValue = (newMinValue: number) => {
        setIsCounting(false);

        if (newMinValue < 0 || maxValue <= newMinValue) {
            setIsError(true);
        } else if (newMinValue >= 0 && maxValue > newMinValue) {
            setIsError(false);
            setMinValue(newMinValue);
        }
    };

    const setValues = () => {
        setToLocalStorage();
        setIsCounting(true);
        setValue(minValue);
    };

    const setToLocalStorage = () => {
        localStorage.setItem("minValue", JSON.stringify(minValue));
        localStorage.setItem("maxValue", JSON.stringify(maxValue));
    };

    const getFromLocalStorage = () => {
        const minValueAsString = localStorage.getItem("minValue");
        const maxValueAsString = localStorage.getItem("maxValue");
        if (minValueAsString) {
            setMinValue(JSON.parse(minValueAsString));
        }
        if (maxValueAsString) {
            setMaxValue(JSON.parse(maxValueAsString));
        }
    };

    const incValue = () => {
        if (value <= maxValue) {
            setValue((prev) => prev + 1);
        }
    };
    const resetValue = () => {
        setValue(minValue);
    };

    return (
        <div className={'appWrapper'}>
            <CounterSettings
                maxValue={maxValue}
                minValue={minValue}
                setNewMinValue={setNewMinValue}
                setNewMaxValue={setNewMaxValue}
                isCounting={isCounting}
                isError={isError}
                setValues={setValues}
            />
            <CounterTable
                value={value}
                maxValue={maxValue}
                minValue={minValue}
                incValue={incValue}
                resetValue={resetValue}
                isCounting={isCounting}
                isError={isError}
            />
        </div>
    );


};