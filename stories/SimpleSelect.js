import React from 'react';
import { storiesOf } from '@kadira/storybook';

import SimpleSelect from 'components/SimpleSelect';
import Space from 'components/Space';

const options = [
  { id: 1, label: 'Hello' },
  { id: 2, label: 'world' },
  { id: 3, label: 'from' },
  { id: 4, label: 'Yurii' },
];

storiesOf('SimpleSelect', module)
  .add('default view', () => ( // {{{
    <div>
      <SimpleSelect options={options} />
      <Space y={1} />
      <SimpleSelect>
        <option value={1}>This</option>
        <option value={2}>is</option>
        <option value={3}>children</option>
      </SimpleSelect>
    </div>
  )) // }}}

  .add('with placeholder', () => ( // {{{
    <SimpleSelect placeholder="this is placeholder" options={options} />
  )) // }}}

  .add('with label', () => ( // {{{
    <SimpleSelect label="Hello world" options={options} />
  )) // }}}

  .add('with required attribute', () => ( // {{{
    <div>
      <SimpleSelect label="Hello world" required options={options} />
      <Space y={1} />
      <SimpleSelect placeholder="placeholder" required options={options} />
    </div>
  )) // }}}

  .add('with different sizes', () => ( // {{{
    <div>
      <SimpleSelect size="xxl" placeholder="XXL" options={options} />
      <Space y={2} />
      <SimpleSelect size="xl" placeholder="XL" options={options} />
      <Space y={2} />
      <SimpleSelect size="l" placeholder="L" options={options} />
      <Space y={2} />
      <SimpleSelect placeholder="M (default)" options={options} />
      <Space y={2} />
      <SimpleSelect size="s" placeholder="S" options={options} />
      <Space y={2} />
      <SimpleSelect size="xs" placeholder="XS" options={options} />
    </div>
  )) // }}}

  .add('with specified defaultValue', () => ( // {{{
    <SimpleSelect defaultValue={2} options={options} />
  )) // }}}

  .add('with specified value', () => ( // {{{
    <SimpleSelect value={3} options={options} />
  )) // }}}

  .add('with error', () => ( // {{{
    <div>
      <SimpleSelect
        label="Hello world" required error="Field is empty" options={options}
      />
      <Space />
      <SimpleSelect
        placeholder="Hello world" required
        error="Field is empty! Please add info to this input."
      />
    </div>
  )) // }}}

  .add('with set focus', () => ( // {{{
    <SimpleSelect autoFocus placeholder="focus it" options={options} />
  )) // }}}

  .add('with specified classes', () => ( // {{{
    <div>
      <SimpleSelect
        className="test" label="test" options={options}
        placeholder="with input class .test"
      />
      <Space y={2} />
      <SimpleSelect
        labelClassName="test" label="test" options={options}
        placeholder="with label class .test"
      />
      <Space y={2} />
      <SimpleSelect
        wrapperClassName="test" label="test" options={options}
        placeholder="with wrapper class .test"
      />
    </div>
  )) // }}}

  .add('with specified style', () => ( // {{{
    <div>
      <SimpleSelect
        label="test" style={{ textTransform: 'uppercase' }} value="test"
        options={options}
      />
      <Space y={2} />
      <SimpleSelect
        label="test" labelStyle={{ textTransform: 'uppercase' }} value="test"
        options={options}
      />
      <Space y={2} />
      <SimpleSelect
        label="test" wrapperStyle={{ textTransform: 'uppercase' }} value="test"
        options={options}
      />
    </div>
  )) // }}}

  .add('with specified handlers', () => ( // {{{
    <div>
      <SimpleSelect
        placeholder="onFocus" onFocus={() => console.log('on focus')}
        options={options}
      />
      <Space y={3} />
      <SimpleSelect
        placeholder="onChange" options={options}
        onChange={
          (ev) => console.log(`on change ${ev.target.value}`)
        }
      />
    </div>
  )) // }}}
;
