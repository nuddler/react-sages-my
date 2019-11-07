import * as bookmarksAction from '../actions/bookmarks.action';
import { ActionType, getType } from 'typesafe-actions';
import { Bookmark } from '../../models/bookmarks.models';

type BookmarksActions = ActionType<typeof bookmarksAction>;

interface State {
  items: Bookmark[];
}

const initialState: State = { items: [] };

export const bookmarks = (
  state = initialState,
  action: BookmarksActions,
): State => {
  switch (action.type) {
    case getType(bookmarksAction.bookmarksAdd):
      const bookmark1 = state.items.find(e => e.id === action.payload.id);
      if (bookmark1) {
        return { ...state };
      }
      return { ...state, items: [...state.items, action.payload] };
    case getType(bookmarksAction.bookmarksRemove):
      const bookmark2 = state.items.find(e => e.id === action.payload);
      if (bookmark2 == null) {
        return { ...state };
      }
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.payload),
      };
    case getType(bookmarksAction.bookmarksReset):
      return { ...initialState };
    default:
      return state;
  }
  return initialState;
};
