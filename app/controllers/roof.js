import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createDiods() {
      let roomHeight = $("#room").height();
      let roomWidth = $("#room").width();


      let _store = this.store;
      let walls = this.store.peekAll('wall');
      walls.forEach( function( wall ) {
        wall.get('diods').then( (diods) => {
          diods.forEach( function ( diod) {
            //console.log("diod " + diod);
            let _id = diod.get('id');
            let divBlock = "<div class='diod' id='" + _id + "'></div>";
            $("#room").append(divBlock);
            $("#" + _id).width(8).height(8);
            //$("#" + _id).css("background-color", _id);

          })
        })
      })
    }
  }
});
