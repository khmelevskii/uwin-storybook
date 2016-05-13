import React, { PropTypes } from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import withPropsOnChange from 'recompose/withPropsOnChange';
import pure from 'recompose/pure';
import Base from '../Base';
import classNames from 'classnames/bind';
import scss from './Icon.scss';

const { // {{{
  string,
  bool,
  oneOf,
} = PropTypes; // }}}

/*
 * Svg icon component
 */
export const icon = ({ // {{{
  file,
  prefix,
  name,
  ...props,
}) => {
  const svg = `<use xlink:href="${file}#${prefix}${name}"></use>`;

  return (
    <Base
      component="svg" dangerouslySetInnerHTML={{ __html: svg }} {...props}
    />
  );
}; // }}}

icon.propTypes = { // {{{
  file: string,
  prefix: string,
  name: string.isRequired,
  fill: string,
  fillInvert: bool,

  size: oneOf([ // {{{
    'xs',
    's',
    'm',
    'l',
    'xl',
    'xxl',
  ]), // }}}
}; // }}}

export const iconHOC = compose( // {{{
  defaultProps({ // {{{
    file: '',
    prefix: 'icon-',
    name: '',
    size: 'm',
    fillInvert: false,
  }), // }}}

  withPropsOnChange( // {{{
    [
      'className', 'size', 'fill', 'fillInvert', 'style',
    ],
    ({
      className, size, fill, fillInvert, style,
    }) => {
      const cx = classNames.bind(scss);

      return {
        className: cx({
          icon: true,
          icon_invert: fillInvert,
          [`size_${size}`]: !!size,
          [className]: !!className,
        }),
        style: { ...style, fill }
      };
    },
  ), // }}}
  pure,
); // }}}

export default iconHOC(icon);
