import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import Tooltip from './Tooltip';
import { Link } from 'react-router';
import scss from 'hint/Hint.scss';

chai.use(chaiEnzyme());

describe('<Tooltip />', () => {
  it('should render', () => { // {{{
    const wrapper = mount(
      <Tooltip hint="test">content</Tooltip>
    ).find(Tooltip);

    const [mainClassName, htmlHintClassName] = scss.main.split(' ');

    expect(wrapper).to.have.tagName('span')
      .and.to.have.className(mainClassName)
      .and.to.have.className(htmlHintClassName);
  }); // }}}

  it('should render as a specified HTML element', () => { // {{{
    const wrapper = mount(
      <Tooltip component="strong" hint="test" />
    ).find(Tooltip);

    expect(wrapper).to.have.tagName('strong');
  }); // }}}

  it('should render as a specified Component', () => { // {{{
    const wrapper = mount(
      <Tooltip component={Link} to="/test" hint="test" />
    ).find(Link);

    expect(wrapper.type()).to.be.equal(Link);
  }); // }}}
});
