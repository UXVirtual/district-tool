import Ember from 'ember';

export function even(params/*, hash*/) {
  let value = params[0];
  return ((value % 2) == 0);
}

export default Ember.Helper.helper(even);
