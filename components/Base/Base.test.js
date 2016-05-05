import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import Flex from '../Flex';
import Base from './Base';
import scss from './Base.scss';

chai.use(chaiEnzyme());

describe('<Base />', () => {
  it('should render', () => { // {{{
    const wrapper = mount(
      <Base>test</Base>
    ).find(Base);

    expect(wrapper).to.have.text('test');
  }); // }}}

  it('should render as a specified HTML element', () => { // {{{
    const wrapper = mount(
      <Base component="strong" />
    ).find(Base);

    expect(wrapper).to.have.tagName('strong');
  }); // }}}

  it('should render as a specified Component', () => { // {{{
    const wrapper = mount(
      <Base component={Flex} />
    ).find(Flex);

    expect(wrapper.type()).to.be.equal(Flex);
  }); // }}}

  it('should render with specified classes', () => { // {{{
    const wrapper = mount(
      <Base className="foo bar" />
    ).find(Base);

    expect(wrapper).to.have.className('foo')
      .and.to.have.className('bar');
  }); // }}}

  it('should render with specified css styles', () => { // {{{
    const wrapper = mount(
      <Base style={{ fontSize: 20 }} />
    ).find(Base);

    expect(wrapper).to.have.style('font-size', '20px');
  }); // }}}

  it('should render with specified margins', () => { // {{{
    const wrapper = mount(
      <Base m={2} />
    ).find(Base);

    expect(wrapper).to.have.className(scss.m2);
  }); // }}}

  it('should render with specified paddings', () => { // {{{
    const wrapper = mount(
      <Base px={3} />
    ).find(Base);

    expect(wrapper).to.have.className(scss.px3);
  }); // }}}

  it('should render with specified floats', () => { // {{{
    const wrapper = mount(
      <Base pull="right" />
    ).find(Base);

    expect(wrapper).to.have.className(scss.pull_right);
  }); // }}}

  it('should render with clear both', () => { // {{{
    const wrapper = mount(
      <Base clear />
    ).find(Base);

    expect(wrapper).to.have.className(scss.clear);
  }); // }}}

  it('should render with custom attributes', () => { // {{{
    const wrapper = mount(
      <Base component="button" title="Title" />
    ).find(Base);

    expect(wrapper).to.have.tagName('button')
      .and.have.attr('title', 'Title');
  }); // }}}

  it('should not render', () => { // {{{
    const wrapper = mount(
      <Base exists={false} />
    ).find(Base);

    expect(wrapper.html()).to.be.equal(null);
  }); // }}}

  it('should render <button> with className=foo, paddings, margins, float and clear', () => { // {{{
    const wrapper = mount(
      <Base
        component="button"
        className="foo"
        px={2} py={4}
        mt={1} mb={2}
        pull="right" clear
      >
        test
      </Base>
    ).find(Base);

    expect(wrapper).to.have.className('foo')
      .and.have.className(scss.px2)
      .and.have.className(scss.py4)
      .and.have.className(scss.mt1)
      .and.have.className(scss.mb2)
      .and.have.className(scss.pull_right)
      .and.have.className(scss.clear)
      .and.have.tagName('button')
      .and.have.text('test');
  }); // }}}
});
