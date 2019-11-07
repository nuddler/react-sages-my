import React, { FC, useEffect } from 'react';
import { Show } from '../../../models/tv.models';
import { useDispatch, useSelector } from 'react-redux';
import { bookmarksRemove } from '../../../store/actions/bookmarks.action';
import { RootState } from '../../../store/reducers';

type Props = {
  item: Show;
};

export const BookmarksRemove: FC<Props> = ({ item }) => {
  const items = useSelector((state: RootState) => state.bookmarks.items);
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  let isBookmarked = items.some(e => e.id === item.id);

  return (
    <button
      disabled={!isBookmarked}
      className="btn-danger btn"
      onClick={() => dispatch(bookmarksRemove(item.id))}
    >
      RM
    </button>
  );
};
