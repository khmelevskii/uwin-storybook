import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import Space from './Space';
import scss from './Space.scss';

chai.use(chaiEnzyme());

describe('<Space />', () => {
  it('should render', () => { // {{{
    const wrapper = mount(
      <Space />
    ).find(Space);

    expect(wrapper).to.have.tagName('span')
      .and.to.have.className(scss.x1);
  }); // }}}

  it('should render with width', () => { // {{{
    const wrapper = mount(
      <Space x={3} />
    ).find(Space);

    expect(wrapper).to.have.tagName('span')
      .and.to.have.className(scss.x3);
  }); // }}}

  it('should render with height', () => { // {{{
    const wrapper = mount(
      <Space y={3} />
    ).find(Space);

    expect(wrapper).to.have.tagName('span')
      .and.to.have.className(scss.y3)
      .and.not.to.have.className(scss.x1);
  }); // }}}

  it('should render as div tag', () => { // {{{
    const wrapper = mount(
      <Space div />
    ).find(Space);

    expect(wrapper).to.have.tagName('div')
      .and.to.have.className(scss.x1);
  }); // }}}
});
