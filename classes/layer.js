class Layer {
  constructor() {
    this.shapeSize = BLOCK_SIZE;
    this.position = 0;
    this.paletteIndex = floor(random(0, PALETTE.length));
    this.color = PALETTE[this.paletteIndex];
  }

  update() {
    this.color = PALETTE[this.paletteIndex];
  }
}

class Background extends Layer {
  constructor() {
    super();
  }

  render() {
    // console.log("Rendering Background");

    fill(this.color);

    push();
    rect(this.position, 0, this.shapeSize);
    pop();
  }
}

class Bar extends Layer {
  constructor() {
    super();
    this.orientation = randomSelectTwo();
    this.color = getRandomFromPalette(2);
  }

  render() {
    // console.log("Rendering Bar");

    fill(this.color);

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

    fill(this.color);

    push();
    applyRotation();
    rightTriangle(this.position, 0, this.shapeSize);
    pop();
  }
}

class DoubleTriangle extends Layer {
  constructor() {
    super();
    this.color = getRandomFromPalette(2);
  }

  render() {
    // console.log("Rendering Double Triangle");

    fill(this.color);

    push();
    doubleTriangle(this.position, 0, this.shapeSize);
    pop();
  }
}

class Diamond extends Layer {
  constructor() {
    super();
    this.color = PALETTE[2];
  }

  render() {
    // console.log("Rendering Diamond");

    fill(this.color);

    push();
    applyRotation();
    diamond(this.position, 0, this.shapeSize);
    pop();
  }
}

class Circle extends Layer {
  constructor() {
    super();
    this.shapeSize = BLOCK_SIZE * 0.7;
    this.color = PALETTE[2];
  }

  render() {
    // console.log("Rendering Circle");

    fill(this.color);

    push();
    ellipse(this.position, 0, this.shapeSize);
    pop();
  }
}

class Square extends Layer {
  constructor() {
    super();
    this.shapeSize = BLOCK_SIZE * 0.7;
  }

  render() {
    // console.log("Rendering Square");

    fill(this.color);

    push();
    rotate(45);
    rect(this.position, 0, this.shapeSize);
    pop();
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
    this.shapeSize = BLOCK_SIZE * 0.5;
    this.color = randomSelectTwo() ? PALETTE[3] : PALETTE[2];
  }

  render() {
    // console.log("Rendering Eyeball");

    fill(this.color);

    push();
    ellipse(this.position, 0, this.shapeSize);
    pop();
  }
}
