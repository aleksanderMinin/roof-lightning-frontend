import DS from 'ember-data';

export default DS.Model.extend({
  length: DS.attr('number'),
  diodsPerMetr: DS.attr('number'),
  lastDiod: DS.attr('number'),
  diods: DS.hasMany('diod')
});
