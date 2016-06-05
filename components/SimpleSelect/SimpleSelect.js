import React, { PropTypes } from 'react';
import compose from 'recompose/compose';
import classNames from 'classnames/bind';
import defaultProps from 'recompose/defaultProps';
import withPropsOnChange from 'recompose/withPropsOnChange';
import pure from 'recompose/pure';
import formControlHOC from 'HOCs/formControl';
import scss from './SimpleSelect.scss';

const { // {{{
  array,
} = PropTypes; // }}}

/*
 * SimpleSelect component
 */
export const simpleSelect = ({ // {{{
  // Disabled eslint react/prop-types because validate in formControlHOC
  /* eslint-disable react/prop-types */
  label,
  error,
  wrapperClassName,
  wrapperStyle,
  elementWrapperClassName,
  elementWrapperStyle,
  placeholder,
  /* eslint-enable react/prop-types */
  ...props,
}) =>
  <div style={wrapperStyle} className={wrapperClassName}>
    {label}
    <span style={elementWrapperStyle} className={elementWrapperClassName}>
      <select {...props} required={!!placeholder} />
      {error}
    </span>
  </div>
; // }}}

simpleSelect.propTypes = { // {{{
  options: array,
}; // }}}

export const simpleSelectHOC = compose( // {{{
  defaultProps({ // {{{
    options: [],
    defaultValue: '',
  }), // }}}

  // wrapperClassName
  withPropsOnChange( // {{{
    ['wrapperClassName'], ({ wrapperClassName }) => {
      const cx = classNames.bind(scss);

      return {
        wrapperClassName: cx({
          select__wrap: true,
          [wrapperClassName]: !!wrapperClassName,
        }),
      };
    },
  ), // }}}

  // className
  withPropsOnChange( // {{{
    [
      'className',
    ],
    ({
      className,
    }) => {
      const cx = classNames.bind(scss);

      return {
        className: cx({
          select: true,
          [className]: !!className,
        }),
      };
    },
  ), // }}}

  // options
  withPropsOnChange( // {{{
    [
      'options', 'children', 'placeholder',
    ],
    ({
      options, children, placeholder,
    }) => {
      let calcChildren = children ||
        options.map(o => <option {...{ key: o.id, value: o.id, children: o.label }} />);

      if (!!placeholder) {
        const placeholderOption =
          <option value="" disabled hidden>{placeholder}</option>;

        calcChildren = [placeholderOption, ...calcChildren];
      }

      return {
        children: calcChildren,
        options: null,
      };
    },
  ), // }}}

  formControlHOC,

  pure,
); // }}}

export default simpleSelectHOC(simpleSelect);
