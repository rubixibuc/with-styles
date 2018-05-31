![Travis](https://travis-ci.org/rubixibuc/with-styles.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/rubixibuc/with-styles/badge.svg?branch=master)](https://coveralls.io/github/rubixibuc/with-styles?branch=master)

# with-styles

React style HOC. Supports both plain style objects and style objects computed from passed props.

## Getting Started

### Installing

```text
npm i @rubixibuc/with-styles
```

### Usage

#### without props

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
```

#### with props

```jsx harmony
import React from 'react';
import withStyles from '@rubixibuc/with-styles';

export default withStyles(({someProp}) => ({
  myDiv: {
    height: someProp.height,
    width: someProp.width
  }
}))(myComponent);
```

#### with recompose

```jsx harmony
import React from 'react';
import withStyles from '@rubixibuc/with-styles';
import { compose } from 'recompose';

export const enhance = compose(
  withState('backgroundColor', 'updateBackgroundColor', '#fff'),
  withStyles(({backgroundColor}) => ({
    div: {
      backgroundColor
    }
  }))
)
```