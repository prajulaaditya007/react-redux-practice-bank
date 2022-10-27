import {ActionTypes} from "../action-types";
import {Dispatch} from "redux";
import {Action} from "../actions";

export const depositMoney = (amount:number) => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type:ActionTypes.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount:number) => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type:ActionTypes.WITHDRAW,
            payload: amount
        })
    }
}

export const bankrupt = () => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type:ActionTypes.BANKRUPT
        })
    }
}