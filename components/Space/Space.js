import React, { PropTypes } from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import withPropsOnChange from 'recompose/withPropsOnChange';
import pure from 'recompose/pure';
import classNames from 'classnames/bind';
import css from './Space.scss';

const { // {{{
  bool,
  oneOf,
} = PropTypes; // }}}

/*
 * Space component
 */
export const space = ({ // {{{
  div,
  ...props,
}) => {
  const TagName = div ? 'div' : 'span';
  const calcProps = { ...props, x: null, y: null };

  return (
    <TagName {...calcProps} />
  );
}; // }}}

space.propTypes = { // {{{
  div: bool,
  x: oneOf([0, 1, 2, 3, 4, 5]),
  y: oneOf([0, 1, 2, 3, 4, 5]),
}; // }}}

export const spaceHOC = compose( // {{{
  defaultProps({ // {{{
    x: 0,
    y: 0,
    div: false,
  }), // }}}

  withPropsOnChange( // {{{
    [
      'x', 'y', 'className',
    ],
    ({
      x, y, className,
    }) => {
      const cx = classNames.bind(css);
      const spaceX = x === 0 && y === 0 ? 1 : x;

      return {
        className: cx({ // {{{
          space,

          [`x${spaceX}`]: spaceX > 0,
          [`y${y}`]: y > 0,

          [className]: !!className,
        }), // }}}
      };
    },
  ), // }}}

  pure,
); // }}}

export default spaceHOC(space);
