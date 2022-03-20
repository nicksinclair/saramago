let ROWS = 10;
let COLS = 10;
let BLOCK_SIZE = 30;

let prev_rows = ROWS;
let prev_cols = COLS;

// UI DOM ELEMENTS
let primaryColorPicker;
let secondaryColorPicker;
let tertiaryColorPicker;
let backgroundColorPicker;

let rowSlider;
let colSlider;

let saveButton;

// THEMES
let dynamicTheme = [];
let PALETTE = [
  // color(0, 100, 100),
  // color(240, 100, 100),
  // color(0, 0, 0),
  // color(0, 0, 100),
];

// LAYOUT
let MARGIN = BLOCK_SIZE * 0.05;
let PADDING = BLOCK_SIZE * 0.05;

let GRIDBOX = BLOCK_SIZE + PADDING;
let START = BLOCK_SIZE + MARGIN;

let totalX = START + MARGIN + GRIDBOX * COLS;
let totalY = START + MARGIN + GRIDBOX * ROWS;

// BLOCKS
const blocks = [];

function setup() {
  pixelDensity(1);
  colorMode(HSB);

  let maxRows = ceil((windowHeight - (START + MARGIN)) / GRIDBOX);
  let maxCols = floor((windowWidth - (START + MARGIN + 350)) / GRIDBOX);

  // UI DOM ELEMENTS
  // parent UI element
  const ui = createDiv().class("control-panel");

  // labels
  const primaryLabel = createDiv("PRIMARY COLOR").class("label").parent(ui);
  const secondaryLabel = createDiv("SECONDARY COLOR").class("label").parent(ui);
  const tertiaryLabel = createDiv("TERTIARY COLOR").class("label").parent(ui);
  const backgroundLabel = createDiv("BACKGROUND COLOR")
    .class("label")
    .parent(ui);

  const rowLabel = createDiv("ROWS").class("label").parent(ui);
  const colLabel = createDiv("COLUMNS").class("label").parent(ui);

  // color pickers
  primaryColorPicker = createColorPicker(color(0, 100, 100))
    .class("color-picker")
    .parent(primaryLabel);
  secondaryColorPicker = createColorPicker(color(240, 100, 100))
    .class("color-picker")
    .parent(secondaryLabel);
  tertiaryColorPicker = createColorPicker(color(0, 0, 0))
    .class("color-picker")
    .parent(tertiaryLabel);
  backgroundColorPicker = createColorPicker(color(0, 0, 100))
    .class("color-picker")
    .parent(backgroundLabel);

  // sliders
  rowSlider = createSlider(2, maxRows, 10, 1).class("slider").parent(rowLabel);
  colSlider = createSlider(2, maxCols, 10, 1).class("slider").parent(colLabel);

  saveButton = createButton("SAVE SVG").parent(ui);
  saveButton.mousePressed(saveSVG);

  createCanvas(totalX, totalY, SVG);

  // MODES
  rectMode(CENTER);
  angleMode(DEGREES);

  calculatePalette();

  // BLOCKS
  generateBlocks();
}

function draw() {
  // LAYOUT
  calculateLayout();

  // COLOR
  calculatePalette();

  background(PALETTE[PALETTE.length - 1]);
  noFill();
  noStroke();

  // BLOCK GRID
  renderBlocks();

  // BORDER
  // push();
  // noFill();
  // stroke(PALETTE[0]);
  // translate(width / 2, height / 2);
  // rect(0, 0, totalX - MARGIN, totalY - MARGIN);
  // pop();

  // console.log(frameRate());

  // comment/uncomment to toggle interactivity
  noLoop();
}

function generateBlocks() {
  blocks.splice(0, blocks.length);

  for (let x = 0; x < COLS; x++) {
    for (let y = 0; y < ROWS; y++) {
      const posX = START + x * GRIDBOX;
      const posY = START + y * GRIDBOX;

      blocks.push(new Block(posX, posY));
    }
  }
}

function renderBlocks() {
  blocks.forEach((block) => {
    push();
    translate(block.x, block.y);
    block.update();
    block.render();
    pop();
  });
}

function calculateLayout() {
  ROWS = rowSlider.value();
  COLS = colSlider.value();

  if (evaluateResize()) {
    generateBlocks();
  }

  prev_rows = ROWS;
  prev_cols = COLS;

  MARGIN = BLOCK_SIZE * 0.05;
  PADDING = BLOCK_SIZE * 0.05;

  GRIDBOX = BLOCK_SIZE + PADDING;
  START = BLOCK_SIZE + MARGIN;

  totalX = START + MARGIN + GRIDBOX * COLS;
  totalY = START + MARGIN + GRIDBOX * ROWS;

  resizeCanvas(totalX, totalY);
}

function calculatePalette() {
  dynamicTheme = [
    primaryColorPicker.color(),
    secondaryColorPicker.color(),
    tertiaryColorPicker.color(),
    backgroundColorPicker.color(),
  ];

  PALETTE = dynamicTheme;
}

function evaluateResize() {
  if (prev_rows != ROWS) {
    return true;
  }
  if (prev_cols != COLS) {
    return true;
  }
}
