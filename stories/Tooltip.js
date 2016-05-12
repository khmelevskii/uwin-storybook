import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Tooltip from '../components/Tooltip';
import Button from '../components/Button';

storiesOf('Tooltip component', module)
  .add('default view', () => ( // {{{
    <Tooltip hint="test">content</Tooltip>
  )) // }}}

  .add('with custom tagName', () => ( // {{{
    <Tooltip component="a" href="/test" hint="test">content</Tooltip>
  )) // }}}

  .add('with custom Component', () => ( // {{{
    <Tooltip component={Button} hint="test">content</Tooltip>
  )) // }}}
;
