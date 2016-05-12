import React, { PropTypes } from 'react';
import hintHOC from 'HOCs/hint';

const { // {{{
  oneOfType,
  string,
  element,
  func,
} = PropTypes; // }}}

/*
 * Tooltip component
 */
export const tooltip = ({ component: Component, ...props }) =>
  <Component {...props} />;

tooltip.defaultProps = { // {{{
  component: 'span',
}; // }}}

tooltip.propTypes = { // {{{
  // HTML element to render
  component: oneOfType([
    string,
    element,
    func,
  ]),
}; // }}}

export default hintHOC(tooltip);
