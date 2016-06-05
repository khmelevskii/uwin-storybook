import React from 'react';
import { Link } from 'react-router';
import { storiesOf } from '@kadira/storybook';

import Button from 'components/Button';
import Space from 'components/Space';

storiesOf('Button', module)
  .add('default view', () => ( // {{{
    <div style={{ textAlign: 'center' }}>
      <Button>Button</Button>
      <Space y={2} />
      <Button component="submit">Submit button</Button>
      <Space y={2} />
      <Button component="a" url="/test">"A" tag</Button>
      <Space y={2} />
      <Button component={Link} url="/test">React-router Link component</Button>
    </div>
  )) // }}}

  .add('target="_bank" for <a> and <Link>', () => ( // {{{
    <div style={{ textAlign: 'center' }}>
      <Button component="a" targetBlank url="/test">"A" tag</Button>
      <Space y={2} />
      <Button component={Link} targetBlank url="/test">
        React-router Link component
      </Button>
    </div>
  )) // }}}

  .add('with onClick handler', () => ( // {{{
    <div style={{ textAlign: 'center' }}>
      <Button onClick={() => alert('Hello world!')}>Button</Button>
      <Space y={2} />
      <Button component="a" onClick={() => alert('Hello world!')} url="/test">
        "A" tag
      </Button>
      <Space y={2} />
      <Button component={Link} onClick={() => alert('Hello world!')} url="/test">
        React-router Link component
      </Button>
    </div>
  )) // }}}

  .add('with icon', () => ( // {{{
    <div style={{ textAlign: 'center' }}>
      <Button icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="simplified">default</Button>
      <Space y={5} />
      <Button rightIcon="ic_add_alert_48px">default</Button>
      <Space />
      <Button rightIcon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button rightIcon="ic_add_alert_48px" type="simplified">default</Button>
      <Space y={5} />
      <Button rightIcon="ic_add_alert_48px" icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button rightIcon="ic_add_alert_48px" icon="ic_add_alert_48px" type="outline">
        default
      </Button>
      <Space />
      <Button rightIcon="ic_add_alert_48px" icon="ic_add_alert_48px" type="simplified">
        default
      </Button>
      <Space y={5} />
      <Button icon="ic_add_alert_48px" type="outline" />
      <Space />
      <Button icon="ic_add_alert_48px" pill />
      <Space />
      <Button icon="ic_add_alert_48px" pill type="outline" />
      <Space />
      <Button icon="ic_add_alert_48px" type="simplified" />
      <Space />
      <Button rightIcon="ic_add_alert_48px" type="outline" />
      <Space />
      <Button rightIcon="ic_add_alert_48px" pill />
      <Space />
      <Button rightIcon="ic_add_alert_48px" pill type="outline" />
      <Space />
      <Button rightIcon="ic_add_alert_48px" type="simplified" />
      <Space y={5} />
      <Button rightIcon="ic_add_alert_48px" icon="ic_add_alert_48px" type="outline" />
      <Space />
      <Button rightIcon="ic_add_alert_48px" icon="ic_add_alert_48px" pill />
      <Space />
      <Button rightIcon="ic_add_alert_48px" icon="ic_add_alert_48px" pill type="outline" />
      <Space />
      <Button rightIcon="ic_add_alert_48px" icon="ic_add_alert_48px" type="simplified" />
    </div>
  )) // }}}

  .add('disabled', () => ( // {{{
    <div style={{ textAlign: 'center' }}>
      <Button disabled icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" accent="primary">primary</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" accent="success">success</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" accent="info">info</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" accent="warning">warning</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" accent="danger">danger</Button>
      <Space y={2} />
      <Button disabled icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" type="outline" accent="primary">primary</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" type="outline" accent="success">success</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" type="outline" accent="info">info</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" type="outline" accent="warning">warning</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" type="outline" accent="danger">danger</Button>
      <Space y={2} />
      <Button disabled icon="ic_add_alert_48px" type="simplified">default</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" type="simplified" accent="primary">primary</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" type="simplified" accent="success">success</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" type="simplified" accent="info">info</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" type="simplified" accent="warning">warning</Button>
      <Space />
      <Button disabled icon="ic_add_alert_48px" type="simplified" accent="danger">danger</Button>
    </div>
  )) // }}}

  .add('with hint', () => ( // {{{
    <div style={{ textAlign: 'center' }}>
      <Button hint="test hint" hintClassName="foo">Hint</Button>
      <Space />
      <Button hint="test hint" hintHoverable>Hint hoverable</Button>
      <Space />
      <Button hint="test hint" hintAccent="success" hintAlways>Always hint</Button>
      <Space />
      <Button hint="test hint" hintAlways hintAccent="primary" hintHidden>
        Always+Hidden hint
      </Button>
      <Space y={5} />
      <Button hint="test hint" hintAccent="danger" hintPosition="bottom">Bottom hint</Button>
      <Space />
      <Button hint="test hint" hintAccent="warning" hintPosition="left">Left hint</Button>
      <Space />
      <Button hint="test hint" hintAccent="info" hintPosition="right">Right hint</Button>
      <Space />
      <Button hint="test hint" hintPosition="top-left">Top-left hint</Button>
      <Space />
      <Button hint="test hint" hintPosition="top-right">Top-right hint</Button>
      <Space y={5} />
      <Button hint="test hint" hintAccent="success">Success hint</Button>
      <Space />
      <Button hint="test hint" hintAccent="error">Error hint</Button>
      <Space />
      <Button hint="test hint" hintAccent="warning">Warning hint</Button>
      <Space y={5} />
      <Button
        hintAccent="success" hintHoverable hint={
          <span>
            <strong>Header</strong>
            <p>my tooltip with murkup</p>
            <a href="/test">test link</a>
          </span>
        }
        hintStyle={{ display: 'block', width: 100, textAlign: 'left' }}
      >
        Hint with html content
      </Button>
    </div>
  )) // }}}

  .add('with different sizes', () => ( // {{{
    <div style={{ textAlign: 'center' }}>
      {/* XS */}
      <Button size="xs" icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button size="xs" icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button size="xs" icon="ic_add_alert_48px" type="simplified">default</Button>
      <Space />
      <Button size="xs" pill icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button size="xs" pill icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button size="xs" icon="ic_add_alert_48px" />
      <Space />
      <Button size="xs" icon="ic_add_alert_48px" type="outline" />
      <Space />
      <Button size="xs" icon="ic_add_alert_48px" type="simplified" />
      <Space />
      <Button size="xs" pill icon="ic_add_alert_48px" />
      <Space />
      <Button size="xs" pill icon="ic_add_alert_48px" type="outline" />
      <Space y={5} />
      {/* S */}
      <Button size="s" icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button size="s" icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button size="s" icon="ic_add_alert_48px" type="simplified">default</Button>
      <Space />
      <Button size="s" pill icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button size="s" pill icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button size="s" icon="ic_add_alert_48px" />
      <Space />
      <Button size="s" icon="ic_add_alert_48px" type="outline" />
      <Space />
      <Button size="s" icon="ic_add_alert_48px" type="simplified" />
      <Space />
      <Button size="s" pill icon="ic_add_alert_48px" />
      <Space />
      <Button size="s" pill icon="ic_add_alert_48px" type="outline" />
      <Space y={5} />
      {/* M */}
      <Button icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="simplified">default</Button>
      <Space />
      <Button pill icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button pill icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button icon="ic_add_alert_48px" />
      <Space />
      <Button icon="ic_add_alert_48px" type="outline" />
      <Space />
      <Button icon="ic_add_alert_48px" type="simplified" />
      <Space />
      <Button pill icon="ic_add_alert_48px" />
      <Space />
      <Button pill icon="ic_add_alert_48px" type="outline" />
      <Space y={5} />
      {/* L */}
      <Button size="l" icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button size="l" icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button size="l" icon="ic_add_alert_48px" type="simplified">default</Button>
      <Space />
      <Button size="l" pill icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button size="l" pill icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button size="l" icon="ic_add_alert_48px" />
      <Space />
      <Button size="l" icon="ic_add_alert_48px" type="outline" />
      <Space />
      <Button size="l" icon="ic_add_alert_48px" type="simplified" />
      <Space />
      <Button size="l" pill icon="ic_add_alert_48px" />
      <Space />
      <Button size="l" pill icon="ic_add_alert_48px" type="outline" />
      <Space y={5} />
      {/* XL */}
      <Button size="xl" icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button size="xl" icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button size="xl" icon="ic_add_alert_48px" type="simplified">default</Button>
      <Space />
      <Button size="xl" pill icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button size="xl" pill icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button size="xl" icon="ic_add_alert_48px" />
      <Space />
      <Button size="xl" icon="ic_add_alert_48px" type="outline" />
      <Space />
      <Button size="xl" icon="ic_add_alert_48px" type="simplified" />
      <Space />
      <Button size="xl" pill icon="ic_add_alert_48px" />
      <Space />
      <Button size="xl" pill icon="ic_add_alert_48px" type="outline" />
      <Space y={5} />
      {/* XXL */}
      <Button size="xxl" icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button size="xxl" icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button size="xxl" icon="ic_add_alert_48px" type="simplified">default</Button>
      <Space />
      <Button size="xxl" pill icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button size="xxl" pill icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button size="xxl" icon="ic_add_alert_48px" />
      <Space />
      <Button size="xxl" icon="ic_add_alert_48px" type="outline" />
      <Space />
      <Button size="xxl" icon="ic_add_alert_48px" type="simplified" />
      <Space />
      <Button size="xxl" pill icon="ic_add_alert_48px" />
      <Space />
      <Button size="xxl" pill icon="ic_add_alert_48px" type="outline" />
    </div>
  )) // }}}

  .add('with different type', () => ( // {{{
    <div style={{ textAlign: 'center' }}>
      <Button icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="outline">outline</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="simplified">simplified</Button>
    </div>
  )) // }}}

  .add('with pill style', () => ( // {{{
    <div style={{ textAlign: 'center' }}>
      <Button pill icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button pill icon="ic_add_alert_48px" type="outline">outline</Button>
      <Space />
      <Button pill icon="ic_add_alert_48px" type="simplified">simplified</Button>
      <Space y={2} />
      <Button pill icon="ic_add_alert_48px" />
      <Space />
      <Button pill icon="ic_add_alert_48px" type="outline" />
      <Space />
      <Button pill icon="ic_add_alert_48px" type="simplified" />
    </div>
  )) // }}}

  .add('with different accent', () => ( // {{{
    <div style={{ textAlign: 'center' }}>
      <Button icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button icon="ic_add_alert_48px" accent="primary">primary</Button>
      <Space />
      <Button icon="ic_add_alert_48px" accent="success">success</Button>
      <Space />
      <Button icon="ic_add_alert_48px" accent="info">info</Button>
      <Space />
      <Button icon="ic_add_alert_48px" accent="warning">warning</Button>
      <Space />
      <Button icon="ic_add_alert_48px" accent="danger">danger</Button>
      <Space y={2} />
      <Button icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="outline" accent="primary">primary</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="outline" accent="success">success</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="outline" accent="info">info</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="outline" accent="warning">warning</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="outline" accent="danger">danger</Button>
      <Space y={2} />
      <Button icon="ic_add_alert_48px" type="simplified">default</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="simplified" accent="primary">primary</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="simplified" accent="success">success</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="simplified" accent="info">info</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="simplified" accent="warning">warning</Button>
      <Space />
      <Button icon="ic_add_alert_48px" type="simplified" accent="danger">danger</Button>
    </div>
  )) // }}}

  .add('with loading', () => ( // {{{
    <div style={{ textAlign: 'center' }}>
      <Button loading>default</Button>
      <Space x={5} /><Space x={2} />
      <Button loading accent="primary">primary</Button>
      <Space x={5} /><Space x={2} />
      <Button loading accent="success">success</Button>
      <Space x={5} /><Space x={2} />
      <Button loading accent="info">info</Button>
      <Space x={5} /><Space x={2} />
      <Button loading accent="warning">warning</Button>
      <Space x={5} /><Space x={2} />
      <Button loading accent="danger">danger</Button>
      <Space y={2} />
      <Button loading disabled icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button loading disabled icon="ic_add_alert_48px" accent="primary">primary</Button>
      <Space />
      <Button loading disabled icon="ic_add_alert_48px" accent="success">success</Button>
      <Space />
      <Button loading disabled icon="ic_add_alert_48px" accent="info">info</Button>
      <Space />
      <Button loading disabled icon="ic_add_alert_48px" accent="warning">warning</Button>
      <Space />
      <Button loading disabled icon="ic_add_alert_48px" accent="danger">danger</Button>
      <Space y={2} />
      <Button loading icon="ic_add_alert_48px">default</Button>
      <Space />
      <Button loading icon="ic_add_alert_48px" accent="primary">primary</Button>
      <Space />
      <Button loading icon="ic_add_alert_48px" accent="success">success</Button>
      <Space />
      <Button loading icon="ic_add_alert_48px" accent="info">info</Button>
      <Space />
      <Button loading icon="ic_add_alert_48px" accent="warning">warning</Button>
      <Space />
      <Button loading icon="ic_add_alert_48px" accent="danger">danger</Button>
      <Space y={2} />
      <Button loading rightIcon="ic_add_alert_48px">default</Button>
      <Space />
      <Button loading rightIcon="ic_add_alert_48px" accent="primary">primary</Button>
      <Space />
      <Button loading rightIcon="ic_add_alert_48px" accent="success">success</Button>
      <Space />
      <Button loading rightIcon="ic_add_alert_48px" accent="info">info</Button>
      <Space />
      <Button loading rightIcon="ic_add_alert_48px" accent="warning">warning</Button>
      <Space />
      <Button loading rightIcon="ic_add_alert_48px" accent="danger">danger</Button>
      <Space y={2} />
      <Button loading icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button loading icon="ic_add_alert_48px" type="outline" accent="primary">primary</Button>
      <Space />
      <Button loading icon="ic_add_alert_48px" type="outline" accent="success">success</Button>
      <Space />
      <Button loading icon="ic_add_alert_48px" type="outline" accent="info">info</Button>
      <Space />
      <Button loading icon="ic_add_alert_48px" type="outline" accent="warning">warning</Button>
      <Space />
      <Button loading icon="ic_add_alert_48px" type="outline" accent="danger">danger</Button>
      <Space y={2} />
      <Button loading disabled icon="ic_add_alert_48px" type="outline">default</Button>
      <Space />
      <Button loading disabled icon="ic_add_alert_48px" type="outline" accent="primary">
        primary
      </Button>
      <Space />
      <Button loading disabled icon="ic_add_alert_48px" type="outline" accent="success">
        success
      </Button>
      <Space />
      <Button loading disabled icon="ic_add_alert_48px" type="outline" accent="info">
        info
      </Button>
      <Space />
      <Button loading disabled icon="ic_add_alert_48px" type="outline" accent="warning">
        warning
      </Button>
      <Space />
      <Button loading disabled icon="ic_add_alert_48px" type="outline" accent="danger">
        danger
      </Button>
      <Space y={2} />
      <Button loading icon="ic_add_alert_48px" />
      <Space />
      <Button loading icon="ic_add_alert_48px" accent="primary" />
      <Space />
      <Button loading icon="ic_add_alert_48px" accent="success" />
      <Space />
      <Button loading icon="ic_add_alert_48px" accent="info" />
      <Space />
      <Button loading icon="ic_add_alert_48px" accent="warning" />
      <Space />
      <Button loading icon="ic_add_alert_48px" accent="danger" />
      <Space y={2} />
      <Button loading pill icon="ic_add_alert_48px" />
      <Space />
      <Button loading pill icon="ic_add_alert_48px" accent="primary" />
      <Space />
      <Button loading pill icon="ic_add_alert_48px" accent="success" />
      <Space />
      <Button loading pill icon="ic_add_alert_48px" accent="info" />
      <Space />
      <Button loading pill icon="ic_add_alert_48px" accent="warning" />
      <Space />
      <Button loading pill icon="ic_add_alert_48px" accent="danger" />
      <Space y={2} />
      <Button loading pill type="outline" icon="ic_add_alert_48px" />
      <Space />
      <Button loading pill type="outline" icon="ic_add_alert_48px" accent="primary" />
      <Space />
      <Button loading pill type="outline" icon="ic_add_alert_48px" accent="success" />
      <Space />
      <Button loading pill type="outline" icon="ic_add_alert_48px" accent="info" />
      <Space />
      <Button loading pill type="outline" icon="ic_add_alert_48px" accent="warning" />
      <Space />
      <Button loading pill type="outline" icon="ic_add_alert_48px" accent="danger" />
    </div>
  )) // }}}
;
