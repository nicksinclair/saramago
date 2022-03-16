const layerConstructors = [
  {
    name: 'Bar',
    init: () => new Bar(),
    weight: 1,
  },
  {
    name: 'Right Triangle',
    init: () => new RightTriangle(),
    weight: 2,
  },
  {
    name: 'Double Triangle',
    init: () => new DoubleTriangle(),
    weight: 3,
  },
  {
    name: 'Diamond',
    init: () => new Diamond(),
    weight: 3,
  },
  {
    name: 'Circle',
    init: () => new Circle(),
    weight: 4,
  },
  {
    name: 'Square',
    init: () => new Square(),
    weight: 5,
  },
  {
    name: 'Leaf',
    init: () => new Leaf(),
    weight: 6,
  },
  {
    name: 'Eyeball',
    init: () => new Eyeball(),
    weight: 6,
  }
];

// Finds a point on a circle of a given radius
// function pointOnCircle(posX, posY, radius, angle) {
//   const x = posX + radius * cos(angle);
//   const y = posY + radius * sin(angle);
//   return createVector(x, y);
// }

// Draws a right triangle
function rightTriangle(posX, posY, length) {
  beginShape();
  const a = createVector(posX + length / 2, posY + length / 2);
  const b = createVector(posX - length / 2, posY + length / 2);
  const c = createVector(posX - length / 2, posY - length / 2);

  vertex(a.x, a.y);
  vertex(b.x, b.y);
  vertex(c.x, c.y);
  vertex(a.x, a.y);
  endShape();
}

function doubleTriangle(posX, posY, length) {
  beginShape();
  const a = createVector(posX + length / 2, posY + length / 2);
  const b = createVector(posX - length / 2, posY + length / 2);
  const c = createVector(posX - length / 2, posY - length / 2);
  const d = createVector(posX + length / 2, posY - length / 2);
  
  vertex(a.x, a.y);
  vertex(c.x, c.y);
  vertex(b.x, b.y);
  vertex(d.x, d.y);
  vertex(a.x, a.y);
  endShape();
}

function diamond(posX, posY, length) {
  beginShape();
  const a = createVector(posX + length / 2, posY + length / 2);
  const b = createVector(posX - length / 4, posY + length / 4);
  const c = createVector(posX - length / 2, posY - length / 2);
  const d = createVector(posX + length / 4, posY - length / 4);
  
  vertex(a.x, a.y);
  vertex(b.x, b.y);
  vertex(c.x, c.y);
  vertex(d.x, d.y);
  vertex(a.x, a.y);
  endShape();
}

// function leaf(posX, posY, length) {
//   beginShape();
//   const a = createVector();
//   const b = createVector();
//   const c = createVector();
//   const d = createVector();
  
//   curveVertex();
//   endShape();
// }

// Randomly selects boolean value
function randomSelectTwo() {
  // Number of Lines
  const rand = random(1);

  if (rand < 0.5) {
    return true;
  } else {
    return false;
  }
}

// Selects a color from PALETTE randomly
function getRandomFromPalette(length = PALETTE.length) {
  const rand = floor(random(0, length));
  return PALETTE[rand];
}

// Applies a random rotation
function applyRotation() {
  const angle = floor(random(4));
  rotate(angle * 90);
}

// Handles logic for selecting shape to render
function renderShape(shape, shapeSize, transform) {
  if (shape === 0) {
    rect(0, 0, shapeSize);
  } else if (shape === 1) {
    ellipse(0, 0, shapeSize);
  } else if (shape === 2) {
    rotate(transform * 90);
    rightTriangle(0, 0, shapeSize);
  }
}