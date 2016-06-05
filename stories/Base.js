import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Base from 'components/Base';
import Flex from 'components/Flex';

storiesOf('Base container', module)
  .add('default view', () => ( // {{{
    <Base className="test">Base container</Base>
  )) // }}}

  .add('with margins', () => ( // {{{
    <div>
      <Base style={{ border: '1px solid' }} m={4}>Base container</Base>
      <Base style={{ border: '1px solid' }}>Base container</Base>
    </div>
  )) // }}}

  .add('with paddings', () => ( // {{{
    <Base style={{ border: '1px solid' }} p={2}>Base container</Base>
  )) // }}}

  .add('clear and pull left and right', () => ( // {{{
    <div style={{ width: '60%' }}>
      <Base pull="left">Base container</Base>
      <Base pull="right">Base container</Base>
      <Base clear style={{ textAlign: 'center' }}>Base container</Base>
    </div>
  )) // }}}

  .add('clearfix', () => ( // {{{
    <Base clearfix style={{ border: '1px solid', width: 300 }}>
      <Base style={{ lineHeight: '50px', background: '#cc0' }} pull="left">Left element</Base>
      <Base style={{ lineHeight: '100px', background: '#7c7' }} pull="right">Right element</Base>
    </Base>
  )) // }}}

  .add('tag element <strong>', () => ( // {{{
    <Base component="strong">Base container</Base>
  )) // }}}

  .add('tag element <button> with custom props "title"', () => ( // {{{
    <Base component="button" title="title">Base container</Base>
  )) // }}}

  .add('component <Flex />', () => ( // {{{
    <Base component={Flex} title="title">Base component</Base>
  )) // }}}

  .add('component not exists', () => ( // {{{
    <Base exists={false}>Base component</Base>
  )) // }}}
;
