import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Loader from 'components/Loader';
import Space from 'components/Space';

storiesOf('Loader', module)
  .add('default view', () => ( // {{{
    <Loader />
  )) // }}}

  .add('colorized', () => ( // {{{
    <Loader colorized />
  )) // }}}

  .add('with specified sizes', () => ( // {{{
    <div>
      <Loader size="xs" />
      <Space x={4} />
      <Loader size="s" />
      <Space x={4} />
      <Loader size="m" />
      <Space x={4} />
      <Loader size="l" />
      <Space x={4} />
      <Loader size="xl" />
      <Space x={4} />
      <Loader size="xxl" />
    </div>
  )) // }}}

  .add('with specified color', () => ( // {{{
    <Loader color="#0f0" />
  )) // }}}
;
