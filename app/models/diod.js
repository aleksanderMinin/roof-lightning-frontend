import DS from 'ember-data';

export default DS.Model.extend({
  red: DS.attr('number'),
  greed: DS.attr('number'),
  blue: DS.attr('number')
});
