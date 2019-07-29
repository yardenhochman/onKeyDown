# onKeyDown
easy control over keyboard events

```javascript 

import React from 'react';
import onKeyDown from './onKeyDown';

const KeyboardAccessibleButton = props => <button onKeyDown={onKeyDown({ keys: ['enter', 'space'] action: props.onClick })} {...props}>Button</button>

const KeyboardAccessibleLink = props => <a onKeyDown={onKeyDown({ keys: ['enter'] action: props.onClick }) {...props}>Link</button>

const AccessibleModal = props => {

  React.useEffect(()=>{
    const closeOnEsc = document.addEventListener('keydown', onKeyDown({ keys: ['esc'] action: props.close }));
    return ()=> document.removeEventListener(closeOnEsc);
  }, [])
  
  return <SomeModalComponent {...props} />
}

```

This runs onClick prop (if defined) when 'enter' or 'space' keys are pressed on a given focused element.
