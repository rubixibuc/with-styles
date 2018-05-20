# with-styles

```jsx harmony
import React from 'react';
import withStyles from '@rubixibuc/with-styles';

const myComponent = ({styles}) => <div style={styles.myDiv}/>;

export default withStyles({
  myDiv: {
    height: 500,
    width: 500
  }
})(myComponent);

// or

export default withStyles(({someProp}) => ({
  myDiv: {
    height: someProp.height,
    width: someProp.width
  }
}))(myComponent);
```