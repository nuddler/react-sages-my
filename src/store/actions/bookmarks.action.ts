import { createAction } from 'typesafe-actions';
import { Bookmark, BookmarkId } from '../../models/bookmarks.models';
import Axios from 'axios';

const apiUrl = 'http://loaclhost:8080/bookmarks';

export const bookmarksAdd = createAction('bookmarks/ADD')<Bookmark>();
export const bookmarksAddSuccess = createAction('bookmarks/ADD_FULFILLED')<
  Bookmark
>();

export const bookmarksRemove = createAction('bookmarks/REMOVE')<BookmarkId>();

export const bookmarksReset = createAction('bookmarks/RESET')<void>();
