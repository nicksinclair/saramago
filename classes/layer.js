class Layer {
  constructor() {
    this.shapeSize = BLOCK_SIZE;
    this.position = 0;
    this.paletteIndex = floor(random(0, PALETTE.length));
    this.color = PALETTE[this.paletteIndex];
  }

  render() {
    fill(this.color);
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
    this.transform = floor(random(2));
  }

  render() {
    fill(this.color);

    push();
    rotate(this.transform * 90);
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
    this.transform = floor(random(2));
  }

  render() {
    fill(this.color);

    push();
    rotate(this.transform * 90);
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
    // TODO
  }
}

class Eyeball extends Layer {
  constructor() {
    super();
    this.shapeSize = BLOCK_SIZE * 0.5;
    this.color = randomSelectTwo() ? PALETTE[3] : PALETTE[2];
  }

  render() {
    fill(this.color);

    push();
    ellipse(this.position, 0, this.shapeSize);
    pop();
  }
}
