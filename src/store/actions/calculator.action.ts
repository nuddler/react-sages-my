import { createAction } from 'typesafe-actions';

export const calculatorAdd = createAction('calculator/ADD')<number>();

export const calculatorRemove = createAction('calculator/REMOVE')<number>();

export const calculatorReset = createAction('calculator/RESET')<void>();
