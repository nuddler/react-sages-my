import React, { FC } from 'react';
import Helmet from 'react-helmet';

export const withTitle = (
  PageComponent: React.ComponentType,
  e: string,
): FC => () => (
  <>
    <Helmet>
      <title> tv :: {e}</title>
    </Helmet>
    <PageComponent />
  </>
);
