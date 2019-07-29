# onKeyDown
easy control over keyboard events

```javascript 

import React from 'react';
import isKeyPressed from './isKeyPressed';

const KeyboardAccessibleButton = props => <button onKeyDown={isKeyPressed({ keys: ['enter', 'space'] action: props.onClick }) {...props}>Regular Button</button>


```

This runs onClick prop (if defined) when 'enter' or 'space' keys are pressed on a given focused element.
