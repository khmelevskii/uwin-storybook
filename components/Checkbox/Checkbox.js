import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import withPropsOnChange from 'recompose/withPropsOnChange';
import pure from 'recompose/pure';
import formControlHOC from 'HOCs/formControl';
import scss from './Checkbox.scss';

const { // {{{
  bool,
  oneOf,
} = PropTypes; // }}}

/*
 * Checkbox component
 */
export const checkbox = ({ // {{{
  // Disabled eslint react/prop-types because validate in formControlHOC
  /* eslint-disable react/prop-types */
  label,
  error,
  wrapperClassName,
  wrapperStyle,
  /* eslint-enable react/prop-types */
  ...props,
}) =>
  <div style={wrapperStyle} className={wrapperClassName}>
    <input type="checkbox" {...props} value />
    {label}
    {error}
  </div>
; // }}}

checkbox.propTypes = { // {{{
  labelPosition: oneOf([
    'left',
    'right',
    'top',
    'bottom',
  ]),
  checked: bool,
}; // }}}

export const checkboxHOC = compose( // {{{
  defaultProps({ // {{{
    labelPosition: 'left',
    checked: false,
  }), // }}}

  // className
  withPropsOnChange( // {{{
    [
      'className', 'size',
    ],
    ({
      className, size,
    }) => {
      const cx = classNames.bind(scss);

      return {
        className: cx({
          checkbox: true,
          [`checkbox_${size}`]: !!size && size !== 'm',
          [className]: !!className,
        }),
      };
    },
  ), // }}}

  // labelClassName
  withPropsOnChange( // {{{
    [
      'labelClassName', 'size',
    ],
    ({
      labelClassName, size,
    }) => {
      const cx = classNames.bind(scss);

      return {
        labelClassName: cx({
          checkbox__label: true,
          [`checkbox__label_${size}`]: !!size && size !== 'm',
          [labelClassName]: !!labelClassName,
        }),
      };
    },
  ), // }}}

  formControlHOC,

  pure,
); // }}}

export default checkboxHOC(checkbox);
