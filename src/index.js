import React from 'react';
import _ from 'lodash';

export default styles => Component => props => {
  return (
    <Component
      styles={_.isFunction(styles) ? styles(props) : styles}
      {...props}
    />
  );
};
