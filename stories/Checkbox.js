import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import Space from 'components/Space';

storiesOf('Checkbox', module)
  .add('default view', () => ( // {{{
    <div>
      <Checkbox />
      <Space />
      <Checkbox checked />
    </div>
  )) // }}}

  .add('with label', () => ( // {{{
    <div>
      <Checkbox label="Hello world" />
      <Space y={2} />
      <Checkbox label="Hello world" checked />
    </div>
  )) // }}}

  .add('with required attribute', () => ( // {{{
    <div>
      <Checkbox label="Hello world" required />
      <Space y={2} />
      <Checkbox label="Hello world" checked required />
    </div>
  )) // }}}

  .add('with different sizes', () => ( // {{{
    <div>
      <Checkbox size="xxl" />
      <Space />
      <Checkbox size="xxl" checked />
      <Space y={2} />
      <Checkbox size="xl" />
      <Space />
      <Checkbox size="xl" checked />
      <Space y={2} />
      <Checkbox size="l" />
      <Space />
      <Checkbox size="l" checked />
      <Space y={2} />
      <Checkbox size="m" />
      <Space />
      <Checkbox size="m" checked />
      <Space y={2} />
      <Checkbox size="s" />
      <Space />
      <Checkbox size="s" checked />
      <Space y={2} />
      <Checkbox size="xs" />
      <Space />
      <Checkbox size="xs" checked />
    </div>
  )) // }}}

  .add('as disabled', () => ( // {{{
    <div>
      <Checkbox disabled />
      <Space />
      <Checkbox disabled checked />
    </div>
  )) // }}}

  .add('with error', () => ( // {{{
    <div>
      <Checkbox
        size="l" label="Hello world" required
        error="Field is empty! Please add info to this input."
      />
      <Space />
      <Input />
      <Space y={1} />
      <Checkbox
        checked placeholder="Hello world" required error="Field is empty"
      />
    </div>
  )) // }}}

  .add('with set focus', () => ( // {{{
    <Checkbox autoFocus placeholder="focus it" />
  )) // }}}

  .add('with specified classes', () => ( // {{{
    <div>
      <Checkbox className="test" label="control className" />
      <Space y={2} />
      <Checkbox labelClassName="test" label="label className" />
      <Space y={2} />
      <Checkbox wrapperClassName="test" label="wrapper className" />
    </div>
  )) // }}}

  .add('with specified style', () => ( // {{{
    <div>
      <Checkbox label="control" style={{ textTransform: 'uppercase' }} value="test" />
      <Space y={2} />
      <Checkbox label="label" labelStyle={{ textTransform: 'uppercase' }} value="test" />
      <Space y={2} />
      <Checkbox label="wrapper" wrapperStyle={{ textTransform: 'uppercase' }} value="test" />
    </div>
  )) // }}}

  .add('with specified handlers', () => ( // {{{
    <div>
      <Checkbox placeholder="onFocus" onFocus={() => console.log('on focus')} />
      <Space y={3} />
      <Checkbox
        checked placeholder="onChange"
        onChange={
          (ev) => console.log(`on change ${ev.target.value}`)
        }
      />
    </div>
  )) // }}}
;
