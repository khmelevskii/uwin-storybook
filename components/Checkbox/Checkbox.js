import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import withPropsOnChange from 'recompose/withPropsOnChange';
import pure from 'recompose/pure';
import scss from './Checkbox.scss';

const { // {{{
  string,
  object,
  oneOf,
  oneOfType,
  bool,
  array,
  element,
  func,
} = PropTypes; // }}}

/*
 * Checkbox component
 */
export const checkbox = ({ // {{{
  label,
  error,
  ...props,
}) =>
  <div className={scss.checkbox__wrap}>
    <input type="checkbox" {...props} value />
    {label}
    {error}
  </div>
; // }}}

checkbox.propTypes = { // {{{
  //
  // TODO
  // labelPosition: oneOf([
  //   'left',
  //   'right',
  //   'top',
  //   'bottom',
  // ]),

  label: oneOfType([
    string,
    array,
    element,
  ]),


  // TODO
  // help: string,

  required: bool,

  disabled: bool,

  focus: bool,

  // Css class for element
  className: string,

  // Styles object
  style: object,

  error: string,

  checked: bool,

  size: oneOf([ // {{{
    's',
    'm',
    'l',
  ]), // }}}

  // TODO
  // process: oneOf([
  //   false,
  //   'progress',
  //   'success',
  //   'error',
  // ]),

  onChange: func,

  onFocus: func,
}; // }}}

export const checkboxHOC = compose( // {{{
  defaultProps({ // {{{
    labelPosition: 'left',
    required: false,
    disabled: false,
    focus: false,
    checked: false,
    size: 'm',
    process: false,
  }), // }}}

  withPropsOnChange( // {{{
    ['id'], ({ id }) => {
      const calcId = id || [
        'checkbox',
        +(new Date),
        (new Date).getMilliseconds(),
        Math.random().toString(36).substring(22),
      ].join('');

      return {
        id: calcId,
      };
    },
  ), // }}}

  withPropsOnChange( // {{{
    [
      'className', 'size', 'error',
    ],
    ({
      className, size, error,
    }) => {
      const cx = classNames.bind(scss);

      return {
        className: cx({
          checkbox: true,
          [`checkbox_size_${size}`]: !!size && size !== 'm',
          checkbox_error: !!error,

          [className]: !!className,
        }),
      };
    },
  ), // }}}

  withPropsOnChange( // {{{
    [
      'id', 'label', 'required',
    ],
    ({
      id, label, required,
    }) => {
      if (!!!label) return { label: null };

      const reqBadge = required
        ? <span className={scss.checkbox__badgeRequired}>*</span>
        : null;

      const labelComponent = (
        <label className={scss.checkbox__label} htmlFor={id}>
          {label}{reqBadge}
        </label>
      );

      return {
        label: labelComponent,
      };
    },
  ), // }}}

  withPropsOnChange( // {{{
    ['error'], ({ error }) => {
      if (!!!error) return { error: null };

      return {
        error: <span className={scss.checkbox__error}>{error}</span>,
      };
    },
  ), // }}}

  pure,
); // }}}

export default checkboxHOC(checkbox);