import Ember from 'ember';
var STRIP_LENGHT = 500; //cm
var DIODS_PERMETR = 60;

export default Ember.Route.extend({
  model() {
    this.get('store').push({
      data:[{
            id: 1,
            type: 'room'
          }]});
    this.get('store').push({
      data:[{
        id: 1,
        type: 'wall',
        attributes: { length: 5.76 },
        relationships: { room: 1 }
      },{
        id: 2,
        type: 'wall',
        attributes: { length: 2.55 },
        relationships: { room: 1 }
      },{
        id: 3,
        type: 'wall',
        attributes: { length: 5.76 },
        relationships: { room: 1 }
      },{
        id: 4,
        type: 'wall',
        attributes: { length: 2.5 },
        relationships: { room: 1 }
      }]});
    let _room =  this.get('store').peekRecord('room',1);
    let _walls = this.get('store').peekAll('wall');
    let _this = this;
    _walls.forEach( function( wall ) {
      _room.set('perimeter', _room.get('perimeter') + wall.get('length') );
      _room.get('walls').pushObject(wall);
      let needDiods =  wall.get('length') * DIODS_PERMETR;
      for ( var i = 1; i <= needDiods; i++ ){
        let _id = i + 1000 *  wall.get('id');
        _this.get('store').push({
          data: [{
            id: _id ,
            type: 'diod',
            attributes: {},
            relationships: { wall: wall.get('id')}
         }] })
        let _diod = _this.get('store').peekRecord('diod', _id);
        wall.get('diods').pushObject(_diod);
      }
    })
}});
