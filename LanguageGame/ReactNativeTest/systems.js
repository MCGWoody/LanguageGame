
selectedEnt = null;

const MoveWordBlocks = (entities, { touches }) => 
{
  touches.filter(t => t.type === "start").forEach(t => {
        let finger = entities[t.id + 1];
        let finger2 = entities[t.id + 2];
        let finger5 = entities[5];
        finger5.text = Math.trunc(t.event.pageX) + ", " + Math.trunc(t.event.pageY);
        if (t.id == 0 && finger && finger.position) {
          finger.position = [
            t.event.pageX,
            t.event.pageY];
        }
        for (let index = 2; index < 5; index++) {
          let element = entities[index];
          let diffX = entities[index].position[0] - t.event.pageX;
          let diffY = entities[index].position[1] - t.event.pageY;
          finger5.text += " / " + Math.trunc(entities[index].position[0]) + ", " + Math.trunc(entities[index].position[1]);
          if( diffX < 50 && diffX > 0 && diffY < 50 && diffY > 0 ) {
            entities[index].selected = true;
            element.text = "special";
          }
          else{
            //entities[index].selected = false;
          }
        } 
      }        
      );

  /*touches.filter(t => t.type === "move").forEach(t => {
    console.log('start touch');
    // check select entities
    var gridX = t.newPageX / 100;
    var gridY = (t.newPageY - 50) / 100;

    var didSelectEnt = false;

    var i;
    for (i = 0; i < entities.length; i++) 
    {
      var gridEntX = entities[i].position[0] / 100;
      var gridEntY = (entities[i].position[1] - 50) / 100;
      if( gridEntX == gridX && gridEntY == gridY )
      {
        didSelectEnt = true;
        selectedEnt = i;
      }
    }

    //check for a move
    if( didSelectEnt && selectedEnt )
    {
      entities[selectedEnt].position[
        gridX * 100,
        (gridY * 100) + 50
      ];
    }
    entities[1].position = [0,0];


  });*/
  
  return entities;
};

export { MoveWordBlocks };