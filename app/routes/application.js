import Ember from 'ember';
import strip from '../models/strip'
export default Ember.Route.extend({
  model() {
    this.get('store').push({
      data:[{
            id: 1,
            type: 'room',
            attributes: { perimeter: 0 }
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
    let _room =   this.get('store').peekRecord('room',1);
    let _walls = this.get('store').peekAll('wall');
    let wallsCount = 0;
    let _this = this;
    _walls.forEach( function( wall ) {
      _room.get('walls').push
      _room.set('perimeter', _room.get('perimeter') + wall.get('length') );
      wallsCount++;
      if (wallsCount == 1 ) {
        _this.get('store').push({
          data: [{
            id: wallsCount,
            type: "strip",
            turnDiod: function() {
              if ( wall.get('lenght') < Strip.STRIP_LENGHT ) {
                return ( Strip.STRIP_LENGHT - wall.get('lenght') )/  Strip.DIODS_PERMETR;
              }
            },
            relationships: {
              startWall: wall.get('id'),
              endWall: function() {
                if ( wall.get('lenght') < Strip.STRIP_LENGHT ) {
                  try {
                    let nextWall = _this.get('store').peekRecord('wall', wall.get('id') + 1);
                    return nextWall;
                  }
                  catch (err) {
                    return 1;
                  }
                }
              }
            }
          }]
        })
      }
      else {

      }
    })
    console.log(wallsCount);


}});
