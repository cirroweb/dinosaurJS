import Ember from 'ember';
const { 'String': { htmlSafe } } = Ember;

const { Component, computed, 'computed': { bool } } = Ember;

// This component is used as a computed inline style element. Defaults to div,
// Pass in either value, css (a string e.g. 'padding: '), and optionally units (string e.g. 'px' or '%')
// ----
// Multiple properties: pass in an array as propertiesCollection with objects for each property to have multiple
// inline stylings. Everytime the value of one of the items changes, it will update the inline styling.
//     * (e.g. [{css: 'padding: ', value: item.spacingValue, units: 'px'}, {css: 'background-color', value: item.color}])

export default Component.extend({
  'tagName': 'div',
  'attributeBindings': ['data-photoid', 'style'],
  'isCollectionOfProperties': bool('propertiesCollection'),
  'classNameBindings': ['boundClass'],
  // Observe the value property as well as the single value property to know when style needs to be recomputed
  'style': computed('isSingleProperty', 'propertiesCollection.@each.value', 'value', 'css', 'units', function() {
    if(this.get('isCollectionOfProperties')) {
      return this.multiPropertyString();
    } else {
      return this.singlePropertyString();
    }
  }),

  // Apply styling for multiple properties aka make style string from propertiesCollection
  multiPropertyString() {
    let styleString = '';
    this.get('propertiesCollection').forEach((property) => {
      const units = property.units ? property.units : '';
      styleString += `${property.css}${property.value}${units}; `;
    });
    return htmlSafe(styleString);
  },

  // Apply single styling to component from value, css and units(optional) property
  singlePropertyString() {
    const css   = this.get('css');
    const value = this.get('value');
    const units = this.get('units') ? this.get('units') : '';

    return htmlSafe(`${css}${value}${units};`);
  }
});
