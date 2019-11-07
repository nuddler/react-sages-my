import React, { FC, useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { Show, ShowResponse } from '../../models/tv.models';
import { Poster } from '../Poster/Poster';
import { Badge } from '../Badge/Badge';
import { Search } from '../Search/Search';
import { PreferencesContext } from '../../context/PreferencesContext';
import { Bookmark } from '../../models/bookmarks.models';
import { BookmarksList } from '../bookmarks/BookmarksList/BookmarksList';
import { BookmarksAdd } from '../bookmarks/BookmarksAdd/BookmarksAdd';
import { BookmarksRemove } from '../bookmarks/BookmarksRemove/BookmarksRemove';
import { observer } from 'mobx-react';
import { items } from '../../index';

type StateProps = {
  bookmarks: Bookmark[];
};

type DispatchProps = {
  saveBookmark: (item: Bookmark) => void;
};

type Props = StateProps & DispatchProps;

export const SearchPage: FC<Props> = observer(({ bookmarks, saveBookmark }) => {
  const [shows, setShows] = useState<Show[]>([]);
  const { initialQuery, perPage } = useContext(PreferencesContext);

  useEffect(() => {
    search(initialQuery);
  }, []);

  //https://api.tvmaze.com/search/shows

  const search = (query: string) => {
    const url = `http://localhost:8080/shows?q=${query}`;
    Axios.get<ShowResponse[]>(url).then(({ data = [] }) =>
      setShows(data.map(({ show }) => show)),
    );
  };

  return (
    <div>
      <div className="row">
        <section className="col col-3">
          <h2 className="h4">Bookmarks </h2>
          {items.status}
          <BookmarksList />
        </section>
        <section className="col">
          <h1 className="h4">
            Search Shows <Badge value={shows.length} />
          </h1>

          <Search onSubmit={search} initialValue={'batman'} />

          <div className="row">
            {shows.map(show => (
              <div key={show.id} className="col col-4">
                <Poster {...show}>
                  <BookmarksAdd show={show} />
                  <BookmarksRemove item={show} />
                </Poster>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
});
