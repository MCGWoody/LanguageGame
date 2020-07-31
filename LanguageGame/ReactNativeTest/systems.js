
selectedEnt = null;

const MoveWordBlocks = (entities, { touches }) => 
{

  touches.filter(t => t.type === "start").forEach(t => {
    // check select entities
    var gridX = t.newPageX / 100;
    var gridY = (t.newPageY - 50) / 100;

    var didSelectEnt = false;

    entities.forEach(ent => {
      var gridEntX = ent.position[0] / 100;
      var gridEntY = (ent.position[1] - 50) / 100;
      if( gridEntX == gridX && gridEntY == gridY )
      {
        didSelectEnt = true;
        selectedEnt = ent;
      }
    });

    //check for a move
    if( !didSelectEnt && selectedEnt )
    {
      selectedEnt.position[
        gridX * 100,
        (gridY * 100) + 50
      ];
    }


  });
  
  return entities;
};

export { MoveWordBlocks };