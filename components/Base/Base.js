import React, { PropTypes } from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import mapPropsOnChange from 'recompose/mapPropsOnChange';
import pure from 'recompose/pure';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import renderNothing from 'recompose/renderNothing';
import classNames from 'classnames/bind';
import css from './Base.scss';

const { // {{{
  string,
  object,
  oneOf,
  oneOfType,
  element,
  bool,
  func,
} = PropTypes; // }}}

/*
 * Base component
 */
export const base = ({ // {{{
  component,
  ...props,
}) => {
  const Component = component;

  return (
    <Component {...props} />
  );
}; // }}}

base.propTypes = { // {{{
  // HTML element string or React component to render
  component: oneOfType([
    string,
    element,
    func,
  ]),

  // Render component or not
  exists: bool,

  // Css classes for element
  cssClasses: object,

  // Css class for element
  className: string,

  // Styles object
  style: object,

  // Float
  pull: oneOf([
    'left',
    'right',
  ]),

  // Clear: both
  clear: bool,

  // Margin based on spacing scale
  m: oneOf([0, 1, 2, 3, 4, 5]),
  // Margin top based on spacing scale
  mt: oneOf([0, 1, 2, 3, 4, 5]),
  // Margin right based on spacing scale
  mr: oneOf([0, 1, 2, 3, 4, 5]),
  // Margin bottom based on spacing scale
  mb: oneOf([0, 1, 2, 3, 4, 5]),
  // Margin left based on spacing scale
  ml: oneOf([0, 1, 2, 3, 4, 5]),
  // Margin left and right based on spacing scale
  mx: oneOf([0, 1, 2, 3, 4, 5]),
  // Margin top and bottom based on spacing scale
  my: oneOf([0, 1, 2, 3, 4, 5]),

  // Padding based on spacing scale
  p: oneOf([0, 1, 2, 3, 4, 5]),
  // Padding top based on spacing scale
  pt: oneOf([0, 1, 2, 3, 4, 5]),
  // Padding right based on spacing scale
  pr: oneOf([0, 1, 2, 3, 4, 5]),
  // Padding bottop based on spacing scale
  pb: oneOf([0, 1, 2, 3, 4, 5]),
  // Padding left based on spacing scale
  pl: oneOf([0, 1, 2, 3, 4, 5]),
  // Padding left and right based on spacing scale
  px: oneOf([0, 1, 2, 3, 4, 5]),
  // Padding top and bottop based on spacing scale
  py: oneOf([0, 1, 2, 3, 4, 5]),
}; // }}}

export const baseHOC = compose( // {{{
  defaultProps({ // {{{
    exists: true,
    component: 'div',
    cssClasses: css,
    className: '',
    clear: false,
  }), // }}}

  mapPropsOnChange( // {{{
    [
      'cssClasses', 'className', 'pull', 'clear',
      'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my',
      'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
    ],
    ({
      cssClasses, className, pull, clear,
      m, mt, mr, mb, ml, mx, my,
      p, pt, pr, pb, pl, px, py,
    }) => {
      const cx = classNames.bind(cssClasses);

      return {
        className: cx({ // {{{
          base,

          [`m${m}`]: m >= 0,
          [`mt${mt}`]: mt >= 0,
          [`mr${mr}`]: mr >= 0,
          [`mb${mb}`]: mb >= 0,
          [`ml${ml}`]: ml >= 0,
          [`mx${mx}`]: mx >= 0,
          [`my${my}`]: my >= 0,

          [`p${p}`]: p >= 0,
          [`pt${pt}`]: pt >= 0,
          [`pr${pr}`]: pr >= 0,
          [`pb${pb}`]: pb >= 0,
          [`pl${pl}`]: pl >= 0,
          [`px${px}`]: px >= 0,
          [`py${py}`]: py >= 0,

          clear,
          [`pull_${pull}`]: !!pull,

          [className]: !!className,
        }), // }}}
      };
    },
  ), // }}}

  branch( // {{{
    ({ exists }) => exists,
    renderComponent(base),
    renderComponent(() => null),
  ), // }}}

  pure,
); // }}}

export default baseHOC(renderNothing());
