import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.get('store').push({
      data:[{
        id: 1,
        type: 'room',
        attributes: {
          perimeter: 0
        }
      },{
        id: 1,
        type: 'wall',
        attributes: {
          length: 5.76
        },
        relationships: {
          room: 1
        }
      },{
        id: 2,
        type: 'wall',
        attributes: {
          length: 2.55
        }
      },{
        id: 3,
        type: 'wall',
        attributes: {
          length: 5.76
        }
      },{
        id: 4,
        type: 'wall',
        attributes: {
          length: 2.5
        }
      }]
    });
    //let _store = this.get('store');
    let _room = this.get('store').peekRecord('room', 1);
    console.log('id ' + _room);
    console.log(_room);
    let _walls = this.get('store').peekAll('wall');
    let wallsCount = 0;
    for (var _wall in _walls) {
      _room.perimeter += _wall.length;
      console.log('id ' + _wall.id);
      wallsCount++;
    }

}});
