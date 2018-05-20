# with-styles

```jsx harmony
import React from 'react';
import withStyles from '@rubixibuc/with-styles';
import { compose } from 'recompose';

const myComponent = ({styles}) => <div style={styles.myDiv}/>;

// without props

export default withStyles({
  myDiv: {
    height: 500,
    width: 500
  }
})(myComponent);

// or with props

export default withStyles(({someProp}) => ({
  myDiv: {
    height: someProp.height,
    width: someProp.width
  }
}))(myComponent);

// can be used with recompose

export const enhance = compose(
  withStyles({
    // ...
  }),
  
  // or
  
  withStyles(({someProp}) => ({
    // ...
  }))
)
```