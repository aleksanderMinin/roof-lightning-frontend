import DS from 'ember-data';

export default DS.Model.extend({
  length: DS.attr(),
  strips: DS.hasMany('strip'),
  room: DS.belongsTo('room')
});
