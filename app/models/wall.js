import DS from 'ember-data';
var STRIP_LENGHT = 500; //cm
var DIODS_PERMETR = 60;

export default DS.Model.extend({
  length: DS.attr('number'),
  room: DS.belongsTo('room'),
  diodsPerMetr: DS.attr('number', {defaultValue: DIODS_PERMETR} ),
  diods: DS.hasMany('diod'),
  angle: DS.attr('number', { defaultValue: 90 })
});
