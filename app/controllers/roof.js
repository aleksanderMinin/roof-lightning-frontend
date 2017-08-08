import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createDiods() {

      let roomHeight = $("#room").height();
      let roomWidth = $("#room").width();

      let _store = this.store;
      let walls = this.store.peekAll('wall');

      //Х - по ширине
      let coordX = $("#room").width();
      //Y - по высоте
      let coordY = $("#room").height();
      walls.forEach( function( wall ) {
        let dio = wall.get('diods').get('length');
        let stepY = coordY / dio;
        let stepX = coordX / dio;
        wall.get('diods').then( (diods) => {
          diods.forEach( function ( diod) {
            //console.log("diod " + diod);
            let _id = diod.get('id');
            let divBlock = "<div class='diod' id='" + _id + "'></div>";
            $("#room").append(divBlock);
            //$("#" + _id).css("background-color", _id);
            //отрисовка вверх

            if ( wall.get('id') == 1 ) {
              let perTop;
              if ( _id % 1000 !== 1 ){
                perTop =  $("#" + (_id - 1) ).css('top');
                perTop = Number ( perTop.substr(0, perTop.length-2)) ;
              }
              else {
                perTop = coordY;
              }
              $("#" + _id ).css('top', perTop - stepY );
            }

            //отрисовка вправо

            if ( wall.get('id') == 2 ){
              let perLeft = 0;
              if ( _id % 1000 !== 1 ){
                perLeft =  $("#" + (_id - 1) ).css('left') ;
                perLeft = perLeft.substr(0, perLeft.length-2);
              }
              else {
                perLeft = 0 - stepX;
              }
              $("#" + _id ).css('left', ( Number(perLeft ) + stepX) );
            }

            //отрисовка вниз
            if ( wall.get('id') == 3 ) {
              let perTop;
              if ( _id % 1000 !== 1 ){
                perTop = $("#" + (_id - 1) ).css('top');
                perTop = Number(perTop.substr(0, perTop.length-2) );
              }
              else {
                perTop = 0;
              }
              $("#" + _id ).css('left', coordX);
              $("#" + _id ).css('top', perTop + stepY);
            }
            //отрисовка влево
            if ( wall.get('id') == 4 ) {
              let perLeft = 0;
              if ( _id % 1000 !== 1 ){
                perLeft =  $("#" + (_id - 1) ).css('left') ;
                perLeft = perLeft.substr(0, perLeft.length-2);
              }
              else {
                perLeft = coordX;
              }
              $("#" + _id ).css('top', coordY - 4 );
              $("#" + _id ).css('left', ( Number(perLeft ) - stepX) );
            }
          })
        })
      })
    }
  }
});
