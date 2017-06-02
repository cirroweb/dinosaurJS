import Ember from 'ember';

const {String: { htmlSafe } } = Ember;

export function iconLibrary([iconKey]) {
  let icons =  {
    'workshop': '<svg width="11px" height="23px" viewBox="0 0 11 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><!-- Generator: Sketch 44.1 (41455) - http://www.bohemiancoding.com/sketch --><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-9" transform="translate(0.000000, 2.000000)" stroke="#FFFFFF" stroke-width="3"><path d="M10.65625,0 C7.21875,0.678571429 5.5,1.69642857 5.5,3.05357143 C5.5,4.41071429 5.5,8.82142857 5.5,16.2857143 C8.02083333,18.0952381 9.85416667,19 11,19" id="Path-2"></path><path d="M5.15625,0 C1.71875,0.678571429 1.40324112e-16,1.69642857 0,3.05357143 C0,4.41071429 0,8.82142857 0,16.2857143 C2.52083333,18.0952381 4.35416667,19 5.5,19" id="Path-2" transform="translate(2.750000, 9.500000) scale(-1, 1) translate(-2.750000, -9.500000) "></path></g></g></svg>',

    'pause': '<svg width="16px" height="20px" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><!-- Generator: Sketch 44.1 (41455) - http://www.bohemiancoding.com/sketch --><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"><g id="Group-10-Copy" transform="translate(1.000000, 2.000000)" stroke="#FFFFFF" stroke-width="3"><g id="Group-8" transform="translate(0.392424, 0.305871)"><path d="M0.383116883,0.136485023 L0.383116883,15.9781576" id="Line"></path><path d="M12.6428571,0.136485023 L12.6428571,15.9781576" id="Line-Copy"></path></g></g></g></svg>',

    'talk': '<svg width="31px" height="23px" viewBox="0 0 31 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><!-- Generator: Sketch 44.1 (41455) - http://www.bohemiancoding.com/sketch --><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"><g id="Group-8-Copy-4" transform="translate(2.000000, 2.000000)" stroke-width="3" stroke="#FFFFFF"><polyline id="Line" points="8.08278849 0.160392796 0.218453743 9.27380952 8.08278849 18.7770155"></polyline><polyline id="Line" transform="translate(22.849379, 9.468704) scale(-1, 1) translate(-22.849379, -9.468704) " points="26.7815463 0.160392796 18.9172115 9.27380952 26.7815463 18.7770155"></polyline></g></g></svg>'
  };
  return htmlSafe(icons[iconKey]);
}

export default Ember.Helper.helper(iconLibrary);
