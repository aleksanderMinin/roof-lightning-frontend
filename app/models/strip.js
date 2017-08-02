import DS from 'ember-data';
var STRIP_LENGHT = 500; //cm
var DIODS_PERMETR = 60;

export default DS.Model.extend({
  turnDiod: DS.attr('number'),
  startWall: DS.belongsTo('wall'),
  endWall: DS.belongsTo('wall'),
  length: DS.attr('number', {defaultValue: STRIP_LENGHT} ),
  diodsPerMetr: DS.attr('number', {defaultValue: DIODS_PERMETR} ),
  diods: DS.hasMany('diod'),
});
