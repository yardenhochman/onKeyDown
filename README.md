# onKeyDown
easy control over keyboard events

```javascript 

import React from 'react';
import isKeyPressed from './isKeyPressed';

const KeyboardAccessibleButton = props => <button onKeyDown={isKeyPressed({ keys: ['enter', 'space'] action: props.onClick })} {...props}>Button</button>

const KeyboardAccessibleLink = props => <a onKeyDown={isKeyPressed({ keys: ['enter'] action: props.onClick }) {...props}>Link</button>

const AccessibleModal = props => {

  React.useEffect(()=>{
    const closeOnEsc = document.addEventListener('keydown', isKeyPressed({ keys: ['esc'] action: props.close }));
    return ()=> document.removeEventListener(closeOnEsc);
  }, [])
  
  return <SomeModalComponent {...props} />
}

```

This runs onClick prop (if defined) when 'enter' or 'space' keys are pressed on a given focused element.
