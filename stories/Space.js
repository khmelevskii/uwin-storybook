import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Space from 'components/Space';

const inlineStyle = {
  display: 'inline-block',
  background: '#cc0',
  width: 20,
  height: 20
};

const blockStyle = {
  background: '#cc0',
  width: 20,
  height: 20
};

storiesOf('Space', module)
  .add('default view', () => (
    <div>
      <span style={inlineStyle} />
      <Space />
      <span style={inlineStyle} />
    </div>
  ))

  .add('with X space', () => (
    <div>
      <span style={inlineStyle} />
      <Space x={3} />
      <span style={inlineStyle} />
    </div>
  ))

  .add('with Y space', () => (
    <div>
      <div style={blockStyle} />
      <Space y={1} />
      <div style={blockStyle} />
    </div>
  ))

  .add('as div with Y space', () => (
    <div>
      <div style={blockStyle} />
      <Space div y={1} />
      <div style={blockStyle} />
    </div>
  ))
;
