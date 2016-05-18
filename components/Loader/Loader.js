import React, { PropTypes } from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import withPropsOnChange from 'recompose/withPropsOnChange';
import pure from 'recompose/pure';
import classNames from 'classnames/bind';
import scss from './Loader.scss';

const { // {{{
  bool,
  oneOf,
  string,
} = PropTypes; // }}}

/*
 * Loader
 */
export const loader = ({ // {{{
  colorized,
  color,
  size,
  ...props
}) => {
  const cx = classNames.bind(scss);

  const pathClassName = cx({
    path: true,
    path_colorized: colorized,
  });

  const iconSize = { // {{{
    xs: 14,
    s: 18,
    m: 22,
    l: 28,
    xl: 36,
    xxl: 36,
  }[size]; // }}}

  return (
    <svg {...props}>
      <circle
        className={pathClassName} cx={iconSize / 2} cy={iconSize / 2} r={iconSize / 2.4} fill="none"
        strokeMiterlimit="10" stroke={color}
      />
    </svg>
  );
}; // }}}

loader.propTypes = { // {{{
  color: string,
  colorized: bool,
  size: oneOf([ // {{{
    'xs',
    's',
    'm',
    'l',
    'xl',
    'xxl',
  ]), // }}}
  accent: oneOf([ // {{{
    'none',
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ]), // }}}
}; // }}}

export const loaderHOC = compose( // {{{
  defaultProps({ // {{{
    color: null,
    size: 'm',
    colorized: false,
    accent: 'default',
  }), // }}}

  withPropsOnChange( // {{{
    [
      'className', 'size', 'color', 'accent',
    ],
    ({
      className, size, color, accent,
    }) => {
      const cx = classNames.bind(scss);

      return {
        className: cx({
          [`size_${size}`]: !!size,
          [`accent_${accent}`]: !!!color && accent !== '',
          [className]: !!className,
        }),
      };
    },
  ), // }}}

  pure,
); // }}}

export default loaderHOC(loader);
