import React, { FC, useEffect, useState } from 'react';
import { Show } from '../../../models/tv.models';
import { Poster } from '../../Poster/Poster';
import { connect } from 'react-redux';
import { Bookmark, BookmarkId } from '../../../models/bookmarks.models';
import { Dispatch } from 'redux';
import { bookmarksRemove } from '../../../store/actions/bookmarks.action';
import { RootState } from '../../../store/reducers';
import { BookmarksRemove } from '../BookmarksRemove/BookmarksRemove';

type StateProps = {
  items: Show[];
};

type Props = StateProps;

const BookmarksList: FC<Props> = ({ items }) => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {}, []);

  return (
    <div className="row">
      {items.map(bookmark => (
        <div key={bookmark.id} className="col col-6 mt-3">
          <Poster name={bookmark.name} image={bookmark.image}>
            <BookmarksRemove item={bookmark} />
          </Poster>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  items: state.bookmarks.items as Show[],
});

const ConnectedBookmarksList = connect<StateProps, {}, {}>(
  mapStateToProps,
  null,
)(BookmarksList);

export { ConnectedBookmarksList as BookmarksList };
