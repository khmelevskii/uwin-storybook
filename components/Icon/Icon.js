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
  accent: oneOf([ // {{{
    'none',
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ]), // }}}
  fill: string,

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
    accent: 'default',
    size: 'm',
  }), // }}}

  withPropsOnChange( // {{{
    [
      'className', 'size', 'accent', 'fill', 'style',
    ],
    ({
      className, size, accent, fill, style,
    }) => {
      const cx = classNames.bind(scss);

      return {
        className: cx({
          icon: true,
          [`size_${size}`]: !!size,
          [`accent_${accent}`]: !!!fill,
          [className]: !!className,
        }),
        style: { ...style, fill }
      };
    },
  ), // }}}
  pure,
); // }}}

export default iconHOC(icon);
