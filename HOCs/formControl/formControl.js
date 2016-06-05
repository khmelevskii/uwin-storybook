import React, { PropTypes } from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import setPropTypes from 'recompose/setPropTypes';
import withPropsOnChange from 'recompose/withPropsOnChange';
import classNames from 'classnames/bind';
import Base from 'components/Base';
import scss from './formControl.scss';

const { // {{{
  string,
  object,
  oneOf,
  oneOfType,
  bool,
  array,
  element,
  func,
  any,
} = PropTypes; // }}}

/*
 * formControl HOC
 */
export const formControlHOC = compose( // {{{
  setPropTypes({ // {{{
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

    required: bool,

    disabled: bool,

    readOnly: bool,

    autoFocus: bool,

    // Css class for element
    className: string,

    // Styles object
    style: object,

    // Css class for label
    labelClassName: string,

    // Styles for label
    labelStyle: object,

    // Css class for wrapper
    wrapperClassName: string,

    // Styles for wrapper
    wrapperStyle: object,

    // Css class for element wrapper
    elementWrapperClassName: string,

    // Styles for element wrapper
    elementWrapperStyle: object,

    error: oneOfType([
      string,
      element,
    ]),

    defaultValue: any,

    value: any,

    size: oneOf([ // {{{
      'xs',
      's',
      'm',
      'l',
      'xl',
      'xxl',
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
  }), // }}}

  defaultProps({ // {{{
    // labelPosition: 'row',
    required: false,
    disabled: false,
    readOnly: false,
    autoFocus: false,
    size: 'm',
    // process: false,
  }), // }}}

  // id
  withPropsOnChange( // {{{
    ['id'], ({ id }) => {
      const calcId = id || [
        'formControl',
        +(new Date),
        (new Date).getMilliseconds(),
        Math.random().toString(36).substring(22),
      ].join('');

      return {
        id: calcId,
      };
    },
  ), // }}}

  // wrapperClassName
  withPropsOnChange( // {{{
    ['wrapperClassName'], ({ wrapperClassName }) => {
      const cx = classNames.bind(scss);

      return {
        wrapperClassName: cx({
          formControl__wrap: true,
          [wrapperClassName]: !!wrapperClassName,
        }),
      };
    },
  ), // }}}

  // elementWrapperClassName
  withPropsOnChange( // {{{
    ['elementWrapperClassName', 'label'], ({ elementWrapperClassName, label }) => {
      const cx = classNames.bind(scss);

      return {
        elementWrapperClassName: cx({
          formControl__elementWrap: true,
          formControl__elementWrap_withoutLabel: !!!label,
          [elementWrapperClassName]: !!elementWrapperClassName,
        }),
      };
    },
  ), // }}}

  // className
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
          formControl: true,
          [`formControl_${size}`]: !!size && size !== 'm',
          formControl_error: !!error,
          [className]: !!className,
        }),
      };
    },
  ), // }}}

  // placeholder
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

  // label
  withPropsOnChange( // {{{
    [
      'id', 'label', 'required', 'labelClassName', 'labelStyle',
    ],
    ({
      id, label, required, labelClassName, labelStyle,
    }) => {
      const labelComponent = (
        <Base
          component="label" exists={!!label}
          className={[scss.formControl__label, labelClassName].join(' ').trim()}
          htmlFor={id} style={labelStyle}
        >
          {label}
          <Base exists={required} className={scss.formControl__badgeRequired}>*</Base>
        </Base>
      );

      return {
        label: labelComponent,
      };
    },
  ), // }}}

  // error
  withPropsOnChange( // {{{
    ['error'], ({ error }) => {
      const errorComponent = (
        <Base component="span" exists={!!error} className={scss.formControl__error}>
          {error}
        </Base>
      );

      return {
        error: errorComponent,
      };
    },
  ), // }}}
); // }}}

export default formControlHOC;

