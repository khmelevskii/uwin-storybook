import React, { PropTypes } from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import pure from 'recompose/pure';
import formControlHOC from 'HOCs/formControl';

const { // {{{
  number,
  oneOf,
} = PropTypes; // }}}

/*
 * Input component
 */
export const input = ({ // {{{
  // Disabled eslint react/prop-types because validate in formControlHOC
  /* eslint-disable react/prop-types */
  label,
  error,
  wrapperClassName,
  wrapperStyle,
  elementWrapperClassName,
  elementWrapperStyle,
  /* eslint-enable react/prop-types */
  ...props,
}) => {
  const Component = 'input';

  return (
    <div style={wrapperStyle} className={wrapperClassName}>
      {label}
      <span style={elementWrapperStyle} className={elementWrapperClassName}>
        <Component {...props} />
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

  // TODO
  // showClearButton: bool,

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
}; // }}}

export const inputHOC = compose( // {{{
  defaultProps({ // {{{
    type: 'text',
    // showClearButton: true,
    // showLetterCounter: false,
    // multiValues: false,
    // multiline: false,
    // countRows: 2,
    // maxRows: 5,
  }), // }}}

  formControlHOC,

  pure,
); // }}}

export default inputHOC(input);
