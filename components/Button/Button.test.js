import React from 'react';
import { Link } from 'react-router';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import Button from './Button';
import scss from './Button.scss';
import scssHint from '../../HOCs/hint/hint.scss';

chai.use(chaiEnzyme());

describe('<Button />', () => {
  it('should render', () => { // {{{
    const wrapper = mount(
      <Button>Button</Button>
    ).find(Button);

    expect(wrapper)
      .to.have.tagName('button')
      .and
      .to.have.text('Button');
  }); // }}}

  it('should render as a submit button', () => { // {{{
    const wrapper = mount(
      <Button component="submit" />
    ).find(Button);

    expect(wrapper).to.have.attr('type', 'submit');
  }); // }}}

  it('should render as a "A" tag', () => { // {{{
    const wrapper = mount(
      <Button component="a" url="/test" />
    ).find(Button);

    expect(wrapper)
      .to.have.tagName('a')
      .and
      .to.have.attr('href', '/test');
  }); // }}}

  it('should render as Link component', () => { // {{{
    const wrapper = mount(
      <Button component={Link} url="/test" />
    ).find(Link);

    expect(wrapper.type()).to.be.equal(Link);
  }); // }}}

  it('should render as <button> without target="_blank" attribute', () => { // {{{
    const wrapper = mount(
      <Button targetBlank />
    ).find(Button);

    expect(wrapper).to.not.have.attr('target');
  }); // }}}

  it('should render as "submit" without target="_blank" attribute', () => { // {{{
    const wrapper = mount(
      <Button component="submit" targetBlank />
    ).find(Button);

    expect(wrapper).to.not.have.attr('target');
  }); // }}}

  it('should render as <a> with target="_blank" attribute', () => { // {{{
    const wrapper = mount(
      <Button component="a" targetBlank />
    ).find(Button);

    expect(wrapper).to.have.attr('target', '_blank');
  }); // }}}

  it('should render as Link with target="_blank" attribute', () => { // {{{
    const wrapper = mount(
      <Button component={Link} url="/test" targetBlank />
    ).find(Button);

    expect(wrapper).to.have.attr('target', '_blank');
  }); // }}}

  it('should render as disabled <button>', () => { // {{{
    const wrapper = mount(
      <Button disabled />
    ).find(Button);

    expect(wrapper).to.be.disabled();
  }); // }}}

  it('should render as a disabled <a>', () => { // {{{
    const wrapper = mount(
      <Button component="a" disabled />
    ).find(Button);

    expect(wrapper).to.have.className(scss.button_disabled);
  }); // }}}

  it('should render as a disabled Link', () => { // {{{
    const wrapper = mount(
      <Button component={Link} url="/test" disabled />
    ).find(Button);

    expect(wrapper).to.have.className(scss.button_disabled);
  }); // }}}

  it('should render as a <button> with hint', () => { // {{{
    const wrapper = mount(
      <Button hint="test" />
    ).find(Button);

    const [mainClassName, htmlHintClassName] = scssHint.main.split(' ');

    expect(wrapper).to.have.className(mainClassName)
      .and.to.have.className(htmlHintClassName)
      .and.to.have.text('test');

    expect(wrapper.find('span')).to.present();

    expect(wrapper.find(`.${scssHint.hint__content}`)).to.present()
      .and.to.have.text('test');
  }); // }}}

  it('should render as a <button> with custom type', () => { // {{{
    const wrapper = mount(
      <Button type="simplified" />
    ).find(Button);

    expect(wrapper).to.have.className(scss.button_simplified);
  }); // }}}

  it('should render as a <button> with custom size', () => { // {{{
    const wrapper = mount(
      <Button size="xs" />
    ).find(Button);

    expect(wrapper).to.have.className(scss.button_xs);
  }); // }}}

  it('should render as a <button> with pill style', () => { // {{{
    const wrapper = mount(
      <Button pill />
    ).find(Button);

    expect(wrapper).to.have.className(scss.button_pill);
  }); // }}}

  it('should render as a <button> with custom accent', () => { // {{{
    const wrapper = mount(
      <Button accent="success" />
    ).find(Button);

    expect(wrapper).to.have.className(scss.button_default_success);
  }); // }}}
});
