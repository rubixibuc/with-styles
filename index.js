const React = require('react');
const _ = require('lodash');

module.exports = styles => Component => props => {
  console.log(styles, Component, props);
  return (
    <Component
      styles={_.isFunction(styles) ? styles(props) : styles}
      {...props}
    />
  );
};
