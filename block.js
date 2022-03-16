class Block {
  constructor(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.picker = floor(random(layerConstructors.length));
    this.blockSize = BLOCK_SIZE
    this.layers = [];

    this.layers.push(new Background());
    
    layerConstructors.forEach(lcon => {
      // console.log(this.picker);
      if (this.picker == lcon.weight) {
        this.layers.push(lcon.init());
      }
    });
  }

  render() {
    push();
    this.layers.forEach(layer => {
      layer.render();
    });
    pop();
  }
  
  update() {
    this.blockSize = BLOCK_SIZE;
    // this.color = PALETTE[this.paletteIndex];
  }
}