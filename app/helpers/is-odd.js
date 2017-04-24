import Ember from 'ember';

export function isOdd([number]) {
  return Number(number) % 2 !== 0;
}

export default Ember.Helper.helper(isOdd);
