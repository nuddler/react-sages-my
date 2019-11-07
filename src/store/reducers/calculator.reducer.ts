import * as calculatorAction from '../actions/calculator.action';
import { ActionType, getType } from 'typesafe-actions';

type CalculatorActions = ActionType<typeof calculatorAction>;

interface State {
  total: number;
}

const initialState: State = { total: 0 };

export const calculator = (
  state = initialState,
  action: CalculatorActions,
): State => {
  switch (action.type) {
    case getType(calculatorAction.calculatorAdd):
      return { ...state, total: state.total + action.payload };
    case getType(calculatorAction.calculatorRemove):
      return { ...state, total: state.total - action.payload };
    case getType(calculatorAction.calculatorReset):
      return { ...initialState };
    default:
      return state;
  }
  return initialState;
};
