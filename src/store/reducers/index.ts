import { combineReducers } from 'redux';
import { calculator } from './calculator.reducer';
import { bookmarks } from './bookmarks.reducer';

export const rootReducer = combineReducers({
  calculator,
  bookmarks,
});

export type RootState = {
  calculator: ReturnType<typeof calculator>;
  bookmarks: ReturnType<typeof bookmarks>;
};
