
selectedEnt = null;

const MoveWordBlocks = (entities, { touches }) => 
{
  touches.filter(t => t.type === "move").forEach(t => {
        let finger = entities[t.id];
        if (finger && finger.position) {
          finger.position = [
            t.newPageX,
            t.newPageY]
          }
        });

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