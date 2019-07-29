import { isFunction, isArray, get } from 'lodash';
import { compose } from 'lodash/fp';

export const keyMap = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  commma: 188,
};

const splitKeys = key => key.split(/\+/);

const checkModifier = key => e => {
  const keyParts = splitKeys(key);
  if (keyParts.length < 2) {
    if (e.shiftKey || e.altKey) return false;
    return true;
  }
  const [modifier, charKey] = keyParts;
  if (modifier === 'shift') {
    if (!e.shiftKey) return false;
  }
  if (modifier === 'alt') {
    if (!e.altKey) return false;
  }
  return true;
};

const getEventKey = event => get('which', event, get(event, 'keycode', false));

const isKeyMatch = event => key => checkModifier(key, event) && keyMap[key.toLowerCase()] === getEventKey(event);

const anyKeyMatchEvent = (keys, e) => keys.some(isKeyMatch(e));

const keysMismatch = ({ keys }, e) => {
  if (isArray(keys)) {
    return !anyKeyMatchEvent(keys, e);
  };
  return false;
}

const testEventFor = test => func => inputs => e => {
  if (test(inputs, e) === false) {
    return func(inputs)(e)
  };
  return false; 
};

export const onKeyDown = testEventFor(keysMismatch)(({ keys, action }) => e => {
  e.preventDefault();
  if (isFunction(action)) {
    action(e);
  }
  return true;
});
