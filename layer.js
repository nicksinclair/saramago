class Layer {
  constructor() {
    this.shapeSize = BLOCK_SIZE;
    this.position = 0;
    this.layerColor = getRandomFromPalette();
  }
}

class Background extends Layer {
  constructor() {
    super();
  }
  
  render() {
    // console.log("Rendering Background");
    
    fill(this.layerColor);
    
    push();
    rect(this.position, 0, this.shapeSize);
    pop();
  }
}

class Bar extends Layer {
  constructor() {
    super();
    this.orientation = randomSelectTwo();
    this.layerColor = getRandomFromPalette(2);
  }
  
  render() {
    // console.log("Rendering Bar");
    
    fill(this.layerColor);
    
    push();
    if (this.orientation) {
      rotate(90);
    }
    
    rect(this.position, 0, this.shapeSize, this.shapeSize / 3);
    pop();
  }
}

class RightTriangle extends Layer {
  constructor() {
    super();
  }
  
  render() {
    // console.log("Rendering Right Triangle");
    
    fill(this.layerColor);
    
    push();
    applyRotation();
    rightTriangle(this.position, 0, this.shapeSize);
    pop();
  }
}

class DoubleTriangle extends Layer {
  constructor() {
    super();
    this.layerColor = getRandomFromPalette(2);
  }
  
  render() {
    // console.log("Rendering Double Triangle");
    
    fill(this.layerColor);
    
    push();
    doubleTriangle(this.position, 0, this.shapeSize);
    pop();
  }
}

class Diamond extends Layer {
  constructor() {
    super();
    this.layerColor = PALETTE[2];
  }
  
  render() {
    // console.log("Rendering Diamond");
    
    fill(this.layerColor);
    
    push();
    applyRotation();
    diamond(this.position, 0, this.shapeSize);
    pop();
  }
}

class Circle extends Layer {
  constructor() {
    super();
    this.shapeSize = (BLOCK_SIZE) * 0.7;
    this.layerColor = PALETTE[2];
  }

  render() {
    // console.log("Rendering Circle");
    
    fill(this.layerColor);

    push();
    ellipse(this.position, 0, this.shapeSize);
    pop();
  }
}

class Square extends Layer {
  constructor() {
    super();
    this.shapeSize = (BLOCK_SIZE) * 0.7;
  }
  
  render() {
    // console.log("Rendering Square");
    
    fill(this.layerColor);
    
    push()
    rotate(45);
    rect(this.position, 0, this.shapeSize);
    pop()
  }
}

class Leaf extends Layer {
  constructor() {
    super();
  }
  
  render() {
    // console.log("Rendering Leaf");
  }
}

class Eyeball extends Layer {
  constructor() {
    super();
    this.shapeSize = (BLOCK_SIZE) * 0.5;
    this.layerColor = randomSelectTwo() ? PALETTE[3] : PALETTE[2];
  }
  
  render() {
    // console.log("Rendering Eyeball");
    
    fill(this.layerColor);

    push();
    ellipse(this.position, 0, this.shapeSize);
    pop();
  }
}