import styles from './Search.module.scss';
import React, { FC, useState } from 'react';

type Props = {
  initialValue: string;
  onSubmit: (value: string) => void;
  onChange?: (value: string) => void;
};
export const Search: FC<Props> = ({
  initialValue = '',
  onSubmit,
  onChange,
}) => {
  const [query, setQuery] = useState(initialValue);

  return (
    <form className={`input-group mb-3 ${styles.search}`}>
      <input
        value={query}
        onChange={({ target: { value } }) => {
          setQuery(value);
          onChange(value);
        }}
        type="search"
        className="form-control"
      />

      <div className="input-group-append">
        <button
          className="btn btn-primary"
          onClick={e => {
            e.preventDefault();
            onSubmit(query);
          }}
        >
          search
        </button>
      </div>
    </form>
  );
};
