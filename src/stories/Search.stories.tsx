import * as React from 'react';
import { Search } from '../components/Search/Search';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Search',
};

export const hello = () => (
  <Search
    initialValue={'flash'}
    onSubmit={action('OnSubmit')}
    onChange={action('change')}
  />
);
