import React, { PropTypes } from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import setPropTypes from 'recompose/setPropTypes';
import renameProps from 'recompose/renameProps';
import withPropsOnChange from 'recompose/withPropsOnChange';
import classNames from 'classnames/bind';
import scss from './hint.scss';

const { // {{{
  oneOf,
  oneOfType,
  string,
  element,
  object,
  bool,
} = PropTypes; // }}}

/*
 * Hint HOC
 */
export const hintHOC = compose( // {{{
  renameProps({ // {{{
    hintPosition: 'position',
    hintAccent: 'accent',
    hintHoverable: 'hoverable',
    hintAlways: 'always',
    hintHidden: 'hidden',
  }), // }}}

  setPropTypes({ // {{{
    position: oneOf([ // {{{
      'top',
      'top-right',
      'top-left',
      'right',
      'left',
      'bottom',
      'bottom-right',
      'bottom-left',
    ]), // }}}

    accent: oneOf([ // {{{
      'default',
      'primary',
      'success',
      'info',
      'warning',
      'danger',
    ]), // }}}

    hint: oneOfType([
      string,
      element,
    ]).isRequired,

    className: string,
    hintClassName: string,
    style: object,
    hintStyle: object,

    hoverable: bool,
    always: bool,
    hidden: bool,
  }), // }}}

  defaultProps({ // {{{
    cssClasses: scss,
    className: '',
    hintClassName: '',
    accent: 'default',
    position: 'top',
    hoverable: false,
    always: false,
    hidden: false,
  }), // }}}

  withPropsOnChange( // {{{
    [
      'className', 'hintClassName', 'cssClasses', 'hoverable', 'always', 'hidden',
      'position', 'accent', 'hintStyle', 'children', 'hint',
    ],
    ({
      className, hintClassName, cssClasses, hoverable, always, hidden,
      position, accent, hintStyle, children, hint,
    }) => {
      const cx = classNames.bind(cssClasses);

      return {
        className: cx({
          main: true,
          [`hint--${position}`]: true,
          [`hint--${accent}`]: !!accent,
          'hint--hoverable': hoverable,
          'hint--always': always,
          'hint--hidden': hidden,
          [className]: !!className,
        }),
        children: <span>
          {children}
          <div style={hintStyle} className={`${cssClasses.tooltip} ${hintClassName}`}>
            {hint}
          </div>
        </span>
      };
    },
  ), // }}}
); // }}}

export default hintHOC;
