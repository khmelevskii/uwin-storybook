import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import hintHOC from './hint';
import scss from './hint.scss';

chai.use(chaiEnzyme());

describe('<Hint />', () => {
  let MockComponent;
  let WrapperComponent;

  beforeEach(() => {
    MockComponent = (props) => <div {...props} />;
    WrapperComponent = hintHOC(MockComponent);
  });

  it('should render', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test">content</WrapperComponent>
    ).find(WrapperComponent);

    const [mainClassName, htmlHintClassName] = scss.main.split(' ');

    expect(wrapper).to.have.className(mainClassName)
      .and.to.have.className(htmlHintClassName)
      .and.to.have.text('contenttest');

    expect(wrapper.find('span')).to.present();

    expect(wrapper.find(`.${scss.hint__content}`)).to.present()
      .and.to.have.text('test');
  }); // }}}

  it('should render as a hoverable', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test" hoverable>content</WrapperComponent>
    ).find(WrapperComponent);

    expect(wrapper.find(`.${scss['hint--hoverable']}`)).to.present();
  }); // }}}

  it('should render with always shows hint', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test" always>content</WrapperComponent>
    ).find(WrapperComponent);

    expect(wrapper.find(`.${scss['hint--always']}`)).to.present();
  }); // }}}

  it('should render with hidden hint', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test" hidden>content</WrapperComponent>
    ).find(WrapperComponent);

    expect(wrapper.find(`.${scss['hint--hidden']}`)).to.present();
  }); // }}}

  it('should render with shows and hidden when hover', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test" always hidden>content</WrapperComponent>
    ).find(WrapperComponent);

    expect(wrapper.find(`.${scss['hint--hidden']}`)).to.present();
    expect(wrapper.find(`.${scss['hint--always']}`)).to.present();
  }); // }}}

  it('should render with top position', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test" position="top">content</WrapperComponent>
    ).find(WrapperComponent);

    expect(wrapper.find(`.${scss['hint--top']}`)).to.present();
  }); // }}}

  it('should render with top and left position', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test" position="top-left">content</WrapperComponent>
    ).find(WrapperComponent);

    expect(wrapper.find(`.${scss['hint--top-left']}`)).to.present();
  }); // }}}

  it('should render with top and right position', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test" position="top-right">content</WrapperComponent>
    ).find(WrapperComponent);

    expect(wrapper.find(`.${scss['hint--top-right']}`)).to.present();
  }); // }}}

  it('should render with left position', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test" position="left">content</WrapperComponent>
    ).find(WrapperComponent);

    expect(wrapper.find(`.${scss['hint--left']}`)).to.present();
  }); // }}}

  it('should render with right position', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test" position="right">content</WrapperComponent>
    ).find(WrapperComponent);

    expect(wrapper.find(`.${scss['hint--right']}`)).to.present();
  }); // }}}

  it('should render with bottom position', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test" position="bottom">content</WrapperComponent>
    ).find(WrapperComponent);

    expect(wrapper.find(`.${scss['hint--bottom']}`)).to.present();
  }); // }}}

  it('should render with bottom and left position', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test" position="bottom-left">content</WrapperComponent>
    ).find(WrapperComponent);

    expect(wrapper.find(`.${scss['hint--bottom-left']}`)).to.present();
  }); // }}}

  it('should render with bottom and right position', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test" position="bottom-right">content</WrapperComponent>
    ).find(WrapperComponent);

    expect(wrapper.find(`.${scss['hint--bottom-right']}`)).to.present();
  }); // }}}

  it('should render with specified accent', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test" accent="warning">content</WrapperComponent>
    ).find(WrapperComponent);

    expect(wrapper.find(`.${scss['hint--warning']}`)).to.present();
  }); // }}}

  it('should render with specified style', () => { // {{{
    const wrapper = mount(
      <WrapperComponent
        hint="test" style={{ fontSize: 20 }} hintStyle={{ fontSize: 30 }}
      />
    ).find(WrapperComponent);

    expect(wrapper).to.have.style('font-size', '20px');
    expect(wrapper.find(`.${scss.hint__content}`)).to.have.style('font-size', '30px');
  }); // }}}

  it('should render with specified class', () => { // {{{
    const wrapper = mount(
      <WrapperComponent hint="test" className="foo" hintClassName="bar" />
    ).find(WrapperComponent);

    expect(wrapper).to.have.className('foo');
    expect(wrapper.find(`.${scss.hint__content}`)).to.have.className('bar');
  }); // }}}

  it('should render with html content', () => { // {{{
    const wrapper = mount(
      <WrapperComponent
        hint={
          <span>
            <strong>Header</strong>
            <p>my tooltip with murkup</p>
            <a href="/test">test link</a>
          </span>
        }
      />
    ).find(WrapperComponent);

    expect(wrapper.find('strong')).to.present();
    expect(wrapper.find('p')).to.present();
    expect(wrapper.find('a[href="/test"]')).to.present();
  }); // }}}
});
