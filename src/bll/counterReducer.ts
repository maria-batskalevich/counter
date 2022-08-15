const InitialState = {
    value: 0,
    minValue: 0,
    maxValue: 5,
    isCounting: true,
    isError: false
}
type InitialStateType = {
    value: number;
    minValue: number;
    maxValue: number;
    isCounting: boolean;
    isError: boolean
}

export const counterReducer = (state: InitialStateType = InitialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":{
            return {
                ...state, value: state.value+1
            }
        }
        case "SET-VALUE": {
            return {
                ...state,
                value: action.value
            }
        }
        case "MIN-VALUE": {
            return {
                ...state,
                minValue: action.newMinValue
            }
        }
        case "MAX-VALUE": {
            return {
                ...state,
                maxValue: action.newMaxValue
            }
        }
        case "IS-COUNTING":{
            return {
                ...state,
                isCounting: action.b
            }
        }
        case "IS-ERROR":{
            return {
                ...state,
                isError: action.b
            }
        }
        default:
            return state
    }
}

type ActionTypes = SetValueACType | MinValueACType | MaxValueACType | isCountingACType | isErrorACType | incValueType
type SetValueACType = ReturnType<typeof setValueAC>
type incValueType = ReturnType<typeof incValueAC>
type MinValueACType = ReturnType<typeof minValueAC>
type MaxValueACType = ReturnType<typeof maxValueAC>
type isCountingACType = ReturnType<typeof isCountingAC>
type isErrorACType = ReturnType<typeof isErrorAC>
export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const setValueAC = (value: number) => ({ type: 'SET-VALUE', value} as const)
export const minValueAC = (newMinValue: number) => ({type: 'MIN-VALUE', newMinValue} as const)
export const maxValueAC = (newMaxValue: number) => ({type: 'MAX-VALUE',newMaxValue} as const)
export const isCountingAC = (b: boolean) => ({type: 'IS-COUNTING', b} as const)
export const isErrorAC = (b: boolean) => ({type: 'IS-ERROR', b} as const)
