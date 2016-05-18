import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import withPropsOnChange from 'recompose/withPropsOnChange';
import classNames from 'classnames/bind';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import renderNothing from 'recompose/renderNothing';
import pure from 'recompose/pure';
import hintHOC from 'HOCs/hint';
import Icon from '../Icon';
import Loader from '../Loader';
import Base from '../Base';
import scss from './Button.scss';

const { // {{{
  string,
  object,
  oneOf,
  oneOfType,
  bool,
  element,
  func,
} = PropTypes; // }}}

/*
 * Button component
 */
export const button = ({ // {{{
  component,
  url,
  targetBlank,
  disabled,
  loading,
  onClick,
  icon,
  rightIcon,
  children,
  size,
  ...props,
}) => {
  const cx = classNames.bind(scss);

  const withIcon = !!icon || !!rightIcon;
  const isOnlyIconButton = withIcon && !!!children;

  const calcProps = { // {{{
    component,
    type: null,
    url: null,
    targetBlank: null,
    disabled,
    onClick,

    ...(component === 'submit' ? { // {{{
      component: 'button',
      type: 'submit',
      onClick: undefined,
    } : {}), // }}}

    ...(component === 'a' ? { // {{{
      href: url,
      target: targetBlank ? '_blank' : null,
      disabled: null,
      onClick: disabled ? ev => ev.preventDefault() : onClick,
    } : {}), // }}}

    ...(component === Link ? { // {{{
      to: url,
      target: targetBlank ? '_blank' : null,
      disabled: null,
      onClick: disabled ? ev => ev.preventDefault() : onClick,
    } : {}), // }}}
  }; // }}}

  const iconSize = { // {{{
    xs: 'xs',
    s: 'xs',
    m: 's',
    l: 'm',
    xl: 'm',
    xxl: 'l',
  }[size]; // }}}

  const iconLeftClasses = cx({ // {{{
    buttonIcon: withIcon,
    buttonIcon_left: !isOnlyIconButton && !!icon,
  }); // }}}
  const iconRightClasses = cx({ // {{{
    buttonIcon: withIcon,
    buttonIcon_right: !isOnlyIconButton && !!rightIcon,
  }); // }}}
  const iconElement = !!icon && !loading // {{{
    ? <Icon accent="" size={iconSize} className={iconLeftClasses} name={icon} />
    : null
  ; //  }}}
  const rightIconElement = !!rightIcon && !loading // {{{
    ? <Icon accent="" size={iconSize} className={iconRightClasses} name={rightIcon} />
    : null
  ; //  }}}

  const loaderOuterClasses = cx({ // {{{
    buttonLoader: !withIcon,
    buttonLoader_outer: !withIcon,
  }); // }}}
  const loaderLeftClasses = cx({ // {{{
    buttonLoader: withIcon,
    buttonLoader_left: !isOnlyIconButton && !!icon,
  }); // }}}
  const loaderRightClasses = cx({ // {{{
    buttonLoader: withIcon,
    buttonLoader_right: !isOnlyIconButton && !!rightIcon,
  }); // }}}
  const loadingElement = loading && !!icon // {{{
    ? <Loader size={iconSize} accent="" className={loaderLeftClasses} />
    : null
  ; //  }}}
  const rightLoadingElement = loading && !!rightIcon// {{{
    ? <Loader size={iconSize} accent="" className={loaderRightClasses} />
    : null
  ; //  }}}
  const outerLoadingElement = loading && !withIcon // {{{
    ? <Loader size={iconSize} accent="" className={loaderOuterClasses} />
    : null
  ; //  }}}

  return (
    <Base {...props} {...calcProps}>
      <span className={scss.buttonContent}>
        {outerLoadingElement}{loadingElement}{iconElement}{children}
        {rightIconElement}{rightLoadingElement}
      </span>
    </Base>
  );
}; // }}}

button.propTypes = { // {{{
  children: oneOfType([
    string,
    element,
  ]),

  // HTML element to render
  component: oneOf([ // {{{
    'button',
    'submit',
    'a',
    Link,
  ]), // }}}

  url: string,

  targetBlank: bool,

  hint: oneOfType([ // {{{
    string,
    element,
  ]), // }}}
  hintPosition: oneOf([ // {{{
    'top',
    'top-left',
    'top-right',
    'left',
    'right',
    'bottom',
    'bottom-left',
    'bottom-right',
  ]), // }}}
  hintAccent: oneOf([ // {{{
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ]), // }}}
  hintClassName: string,
  hintStyle: object,

  icon: string,
  rightIcon: string,
  iconClassName: string,
  iconStyle: object,

  disabled: bool,

  type: oneOf([ // {{{
    'default',
    'simplified',
    'outline',
  ]), // }}}

  pill: bool,

  accent: oneOf([ // {{{
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ]), // }}}

  size: oneOf([ // {{{
    'xs',
    's',
    'm',
    'l',
    'xl',
    'xxl',
  ]), // }}}

  loading: bool,

  onClick: func,
}; // }}}

export const buttonHOC = compose( // {{{
  defaultProps({ // {{{
    component: 'button',
    targetBlank: false,
    disabled: false,
    type: 'default',
    accent: 'default',
    pill: false,
    hintAccent: 'default',
    size: 'm',
    loading: false,
  }), // }}}

  withPropsOnChange( // {{{
    [
      'children', 'className', 'size', 'type', 'accent', 'pill', 'disabled',
    ],
    ({
      children, className, size, type, accent, pill, disabled,
    }) => {
      const cx = classNames.bind(scss);

      return {
        className: cx({
          button: true,
          [`button_${size}`]: true,
          [`button_${type}`]: true,
          [`button_${type}_${accent}`]: true,
          button_withCaption: !!children,
          button_pill: pill,
          button_disabled: disabled,

          [className]: !!className,
        }),
      };
    },
  ), // }}}

  branch( // {{{
    ({ hint }) => !!hint,
    renderComponent(hintHOC(button)),
    renderComponent(button),
  ), // }}}

  pure,
); // }}}

export default buttonHOC(renderNothing());
