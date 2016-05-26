import React, { PropTypes } from 'react';
import compose from 'recompose/compose';
import classNames from 'classnames/bind';
import defaultProps from 'recompose/defaultProps';
import withPropsOnChange from 'recompose/withPropsOnChange';
import pure from 'recompose/pure';
import scss from './Input.scss';

const { // {{{
  string,
  object,
  oneOf,
  oneOfType,
  bool,
  number,
  array,
  element,
  func,
  any,
} = PropTypes; // }}}

/*
 * Input component
 */
export const input = ({ // {{{
  label,
  id,
  error,
  ...props,
}) => {
  const Component = 'input';

  const cx = classNames.bind(scss);
  const elementWrapClasses = cx({
    input__elementWrap: true,
    input__elementWrap_withoutLabel: !!!label,
  });

  return (
    <div className={scss.input__wrap}>
      {label}
      <span className={elementWrapClasses}>
        <Component id={id} {...props} />
        {error}
      </span>
    </div>
  );
}; // }}}

input.propTypes = { // {{{
  //
  type: oneOf([
    'text',
    'url',
    'tel',
    // TODO
    // 'money',
    'email',
    'password',
  ]),

  id: string,

  // TODO
  // labelPosition: oneOf([
  //   'top',
  //   'row',
  // ]),

  placeholder: string,

  label: oneOfType([
    string,
    array,
    element,
  ]),

  // TODO
  // icon: string,

  // TODO
  // iconRight: string,

  // TODO
  // help: string,

  // TODO
  // showClearButton: bool,

  required: bool,

  disabled: bool,

  readOnly: bool,

  autoFocus: bool,

  // Css class for element
  className: string,

  // Styles object
  style: object,

  maxLength: number,

  // TODO
  // showLetterCounter: bool,

  // TODO
  // multiValues: bool,

  // TODO
  // multiline: bool,

  // TODO
  // countRows: number,

  // TODO
  // maxRows: number,

  // TODO
  // mask: string,

  error: oneOfType([
    string,
    element,
  ]),

  defaultValue: any,

  value: any,

  size: oneOf([ // {{{
    's',
    'm',
    'l',
  ]), // }}}

  // TODO
  // addonBefore: element,

  // TODO
  // addonAfter: element,

  // TODO
  // process: oneOf([
  //   false,
  //   'progress',
  //   'success',
  //   'error',
  // ]),

  onBlur: func,

  // TODO
  // onBlurIfChange: func,

  onChange: func,

  // TODO
  // onPressEnter: func,

  onFocus: func,

  onKeyPress: func,
}; // }}}

export const inputHOC = compose( // {{{
  defaultProps({ // {{{
    type: 'text',
    // labelPosition: 'row',
    // showClearButton: true,
    required: false,
    disabled: false,
    readOnly: false,
    autoFocus: false,
    // showLetterCounter: false,
    // multiValues: false,
    // multiline: false,
    // countRows: 2,
    // maxRows: 5,
    size: 'm',
    // process: false,
  }), // }}}

  withPropsOnChange( // {{{
    [
      'id', 'className', 'size', 'error',
    ],
    ({
      id, className, size, error,
    }) => {
      const cx = classNames.bind(scss);
      const calcId = id || [
        'input',
        +(new Date),
        (new Date).getMilliseconds(),
        Math.random().toString(36).substring(22),
      ].join('');

      return {
        id: calcId,

        className: cx({
          input: true,

          [`input_size_${size}`]: !!size && size !== 'm',
          input_error: !!error,

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
        ? <span className={scss.input__badgeRequired}>*</span>
        : null;

      const labelComponent = (
        <label className={scss.input__label} htmlFor={id}>
          {label}{reqBadge}
        </label>
      );

      return {
        label: labelComponent,
      };
    },
  ), // }}}

  withPropsOnChange( // {{{
    [
      'placeholder', 'required', 'label',
    ],
    ({
      placeholder, required, label,
    }) => ({
      placeholder: required && !!!label
        ? `${placeholder} *`
        : placeholder
    }),
  ), // }}}

  withPropsOnChange( // {{{
    [
      'error'
    ],
    ({
      error,
    }) => {
      if (!!!error) return { error: null };

      const errorComponent =
        <span className={scss.input__error}>{error}</span>
      ;

      return {
        error: errorComponent,
      };
    },
  ), // }}}

  pure,
); // }}}

export default inputHOC(input);
