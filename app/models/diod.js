import DS from 'ember-data';

export default DS.Model.extend({
  red: DS.attr('number', {defaultValue: 0 }),
  greed: DS.attr('number', {defaultValue: 0 }),
  blue: DS.attr('number', {defaultValue: 0 }),
  wall: DS.belongsTo('wall')
});
