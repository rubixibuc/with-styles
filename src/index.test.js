import React from 'react';
import withStyles from './index';
import { mount } from 'enzyme';

describe('with-styles', () => {
  it('should render component with styles when initialized with object', () => {
    const Component = withStyles({
      div: {
        backgroundColor: '#000'
      }
    })(({ styles }) => <div style={styles.div} />);

    const MountedComponent = mount(<Component />);

    expect(MountedComponent).toMatchSnapshot();
  });

  it('should render component with styles when initialized with object', () => {
    const Component = withStyles(({ backgroundColor }) => ({
      div: {
        backgroundColor
      }
    }))(({ styles }) => <div style={styles.div} />);

    const MountedComponent = mount(<Component backgroundColor="#fff" />);

    expect(MountedComponent).toMatchSnapshot();
  });
});
