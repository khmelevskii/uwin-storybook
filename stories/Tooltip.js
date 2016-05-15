import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Tooltip from '../components/Tooltip';
import Button from '../components/Button';
import Space from '../components/Space';

storiesOf('Tooltip', module)
  .add('default view', () => ( // {{{
    <Tooltip hint="test">content</Tooltip>
  )) // }}}

  .add('with custom tagName', () => ( // {{{
    <Tooltip component="a" href="/test" hint="test">content</Tooltip>
  )) // }}}

  .add('with custom Component', () => ( // {{{
    <Tooltip component={Button} hint="test">content</Tooltip>
  )) // }}}

  .add('with different accent', () => ( // {{{
    <div>
      <Tooltip hint="test">default</Tooltip>
      <Space />
      <Tooltip hint="test" accent="primary">primary</Tooltip>
      <Space />
      <Tooltip hint="test" accent="success">success</Tooltip>
      <Space />
      <Tooltip hint="test" accent="info">info</Tooltip>
      <Space />
      <Tooltip hint="test" accent="warning">warning</Tooltip>
      <Space />
      <Tooltip hint="test" accent="danger">danger</Tooltip>
    </div>
  )) // }}}
;
