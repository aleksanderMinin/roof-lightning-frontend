import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createDiods() {
      let roomHeight = $("#room").height();
      let roomWidth = $("#room").width();


      let _store = this.store;
      let walls = this.store.peekAll('wall');

      //Х - по ширине
      let coordX = $("#room").outerWidth();
      //Y - по высоте
      let coordY = $("#room").outerHeight();
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
            /*
            if ( wall.get('id') == 1 ) {
              let perTop;
              if ( _id % 1000 !== 1 ){
                perTop =  $("#" + (_id - 1) ).css('top');
                perTop = perTop.substr(0, perTop.length-2);
              }
              else {
                perTop = coordY;
              }
              $("#" + _id ).css('top', perTop - stepY );
            }
            */
            //отрисовка вправо
            if ( wall.get('id') == 2 ){
              let perLeft = 0;
              if ( _id % 1000 !== 1 ){
                //console.log("_id " + (_id ) );
                perLeft =  $("#" + (_id - 1) ).css('left') ;
                //console.log("perLeft text " + perLeft);
                console.log("typeof(perLeft) - " + (typeof perLeft) );
                perLeft = perLeft.substr(0, perLeft.length-2);
                console.log("typeof(perLeft substr) - " + (typeof perLeft) );
                //console.log("perLeft " + perLeft);
              }
              else {
                perLeft = 0 - stepX;
              }
              let x = perLeft.isInteger() + stepX;
              console.log("typeof(perLeft) - " + (typeof perLeft) + " " + ( perLeft + 0 ) );
              console.log("typeof(-)stepX) - " + (typeof stepX) );
              $("#" + _id ).css('left', x );
              console.log("ppoluchilos " + $("#" + _id ).css('left') );
            }
            /*
            //отрисовка вниз
            if ( wall.get('id') == 3 ) {
              $("#" + _id ).css('left',coordX);
              let tId = _id - 1;
              let cY = $("#" + tId ).css('top') + stepY;
              $("#" + _id ).css('top', cY );
              console.log("id " + id);
            }

            //отрисовка влево
            if ( wall.get('id') == 4 ) {
              $("#" + _id ).css('top',coordY);
              $("#" + _id ).css('left', coordX - $("#" + _id - 1 ).css('left') - stepX )
            }
            */
          })
        })
      })
    }
  }
});
