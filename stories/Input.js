import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Input from 'components/Input';
import Space from 'components/Space';

storiesOf('Input', module)
  .add('default view', () => ( // {{{
    <div>
      <Input placeholder="type='text'" />
      <Space y={1} />
      <Input placeholder="type='url'" type="url" />
      <Space y={1} />
      <Input placeholder="type='tel'" type="tel" />
      <Space y={1} />
      <Input placeholder="type='email'" type="email" />
      <Space y={1} />
      <Input placeholder="type='password'" type="password" />
    </div>
  )) // }}}

  .add('with placeholder', () => ( // {{{
    <Input placeholder="placeholder" />
  )) // }}}

  .add('with label', () => ( // {{{
    <Input label="Hello world" />
  )) // }}}

  .add('with required attribute', () => ( // {{{
    <div>
      <Input label="Hello world" required />
      <Space y={1} />
      <Input placeholder="Hello world" required />
    </div>
  )) // }}}

  .add('with different sizes', () => ( // {{{
    <div>
      <Input size="xxl" placeholder="XXL" />
      <Space y={2} />
      <Input size="xl" placeholder="XL" />
      <Space y={2} />
      <Input size="l" placeholder="L" />
      <Space y={2} />
      <Input placeholder="M (default)" />
      <Space y={2} />
      <Input size="s" placeholder="S" />
      <Space y={2} />
      <Input size="xs" placeholder="XS" />
    </div>
  )) // }}}

  .add('disabled and readOnly', () => ( // {{{
    <div>
      <Input disabled value="asdasdas" />
      <Space y={2} />
      <Input readOnly value="asdasdas" />
    </div>
  )) // }}}

  .add('with maxLength', () => ( // {{{
    <Input maxLength={10} placeholder="maxLength = 10" />
  )) // }}}

  .add('with specified defaultValue', () => ( // {{{
    <Input defaultValue={10} />
  )) // }}}

  .add('with specified value', () => ( // {{{
    <Input value="Hello world!" />
  )) // }}}

  .add('with error', () => ( // {{{
    <div>
      <Input label="Hello world" required error="Field is empty" />
      <Space y={1} />
      <Input
        placeholder="Hello world" required
        error="Field is empty! Please add info to this input."
      />
    </div>
  )) // }}}

  .add('with set focus', () => ( // {{{
    <Input autoFocus placeholder="focus it" />
  )) // }}}

  .add('with specified classes', () => ( // {{{
    <div>
      <Input className="test" label="test" placeholder="with input class .test" />
      <Space y={2} />
      <Input labelClassName="test" label="test" placeholder="with label class .test" />
      <Space y={2} />
      <Input wrapperClassName="test" label="test" placeholder="with wrapper class .test" />
    </div>
  )) // }}}

  .add('with specified style', () => ( // {{{
    <div>
      <Input label="test" style={{ textTransform: 'uppercase' }} value="test" />
      <Space y={2} />
      <Input label="test" labelStyle={{ textTransform: 'uppercase' }} value="test" />
      <Space y={2} />
      <Input label="test" wrapperStyle={{ textTransform: 'uppercase' }} value="test" />
    </div>
  )) // }}}

  .add('with specified handlers', () => ( // {{{
    <div>
      <Input placeholder="onFocus" onFocus={() => console.log('on focus')} />
      <Space y={3} />
      <Input
        placeholder="onChange"
        onChange={
          (ev) => console.log(`on change ${ev.target.value}`)
        }
      />
      <Space y={3} />
      <Input
        placeholder="onBlur"
        onBlur={
          (ev) => console.log(`on blur ${ev.target.value}`)
        }
      />
      <Space y={3} />
      <Input
        placeholder="onKeyPress"
        onKeyPress={
          (ev) => console.log(`on keypress ${ev.target.value}`)
        }
      />
    </div>
  )) // }}}
;
