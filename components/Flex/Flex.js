import React, { PropTypes } from 'react';
import Base from '../Base';

const { // {{{
  bool, oneOf,
} = PropTypes; // }}}

/*
 * Desciption Flex component
 */
const Flex = ({
  wrap,
  column,
  align,
  justify,
  hide,
  ...props,
}) => {
  const style = Object.assign(
    hide ? { display: 'none' } : { display: 'flex' },
    wrap ? { flexWrap: 'wrap' } : null,
    column ? { flexDirection: 'column' } : null,
    align ? { alignItems: align } : null,
    justify ? { justifyContent: justify } : null,
  );

  return (
    <Base {...props} style={style} />
  );
};

Flex.propTypes = { // {{{
  /** * Sets flex-wrap: wrap. */
  wrap: bool,
  /** * Sets flex-direction: column. */
  column: bool,
  /** * Sets align-item. */
  align: oneOf(['stretch', 'center', 'baseline', 'start', 'end']),
  /** * Sets justify-content. */
  justify: oneOf(['center', 'space-around', 'space-between', 'start', 'end']),
  /** * Sets display: none. */
  hide: bool,
}; // }}}

Flex.defaultProps = { // {{{
  wrap: false,
  column: false,
  align: 'start',
  justify: 'start',
  hide: false,
}; // }}}

export default Flex;
