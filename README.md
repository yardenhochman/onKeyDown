# onKeyDown
easy control over keyboard events

lets say we wanted to make some elements activate onClick events when they are focused and the user presses enter.

```javascript 
import React from 'react';
import onKeyDown from './onKeyDown';
import { compose } from 'lodash/fp';

const ButtonKeyEvents = Component => props => <Component onKeyDown={onKeyDown({ keys: ['enter', 'space'] action: props.onClick })} {...props}>Button</Component>

```

Examples of different accessible components:

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

Example inspired by [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
