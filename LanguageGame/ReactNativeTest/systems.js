const MoveWordBlocks = (entities, { touches }) => {

  touches.filter(t => t.type === "move").forEach(t => {
    let finger = entities[t.id];
    if (finger && finger.position) {
      finger.position = [
        t.newPageX,
        t.newPageY
      ];
    }
  });
  
  return entities;
};

export { MoveWordBlocks };