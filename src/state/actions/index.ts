import {ActionTypes} from "../action-types";

interface DepositAction {
    type: ActionTypes.DEPOSIT,
    payload: number
}

interface WithdrawAction {
    type: ActionTypes.WITHDRAW,
    payload: number
}

interface BankruptAction {
    type: ActionTypes.BANKRUPT
}

export type Action = DepositAction | WithdrawAction | BankruptAction;