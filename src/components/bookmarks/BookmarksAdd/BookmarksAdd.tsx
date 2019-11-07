import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { bookmarksAdd } from '../../../store/actions/bookmarks.action';
import { Show } from '../../../models/tv.models';
import { Bookmark } from '../../../models/bookmarks.models';
import { RootState } from '../../../store/reducers';

type StateProps = {
  items: Show[];
};

type OwnProps = {
  show: Show;
};

type DispatchProps = {
  saveBookmark: (item: Bookmark) => void;
};

type Props = StateProps & OwnProps & DispatchProps;

const BookmarksAdd: FC<Props> = ({ show, saveBookmark, items }) => {
  let isBookmarked = items.some(e => e.id === show.id);
  return (
    <button
      disabled={isBookmarked}
      className="btn-primary btn"
      onClick={() => saveBookmark(show)}
    >
      add
    </button>
  );
};

const mapStateToDispatch = (dispatch: Dispatch) => ({
  saveBookmark: (item: Bookmark) => dispatch(bookmarksAdd(item)),
});

const mapStateToProps = (state: RootState) => ({
  items: state.bookmarks.items as Show[],
});

const ConnectedBookmarksAdd = connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapStateToDispatch,
)(BookmarksAdd);

export { ConnectedBookmarksAdd as BookmarksAdd };
