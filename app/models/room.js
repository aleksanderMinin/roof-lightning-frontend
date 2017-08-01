import DS from 'ember-data';

export default DS.Model.extend({
  perimeter: DS.attr(),
  wall: DS.hasMany('wall')
});
