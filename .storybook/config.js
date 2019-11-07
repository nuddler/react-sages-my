import { configure } from '@storybook/react';
import '../src/App.scss';
// automatically import all files ending in *.stories.js
configure(
  require.context('../src/stories', true, /\.stories\.(js|tsx)$/),
  module,
);
