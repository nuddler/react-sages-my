import React, { FC } from 'react';
import { Root } from './Badge.elements';

export const Badge: FC<{ value: number }> = ({ value }) => (
  <Root value={value}> {value}</Root>
);
