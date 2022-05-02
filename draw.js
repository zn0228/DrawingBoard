const canvas = document.getElementById("DrawCanvas");
let context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

const draw = (event) => {
  isPainting = true;
  context.beginPath();
  context.moveTo(event.clientX - canvasOffsetX, event.clientY);
};

const drawstop = (event) => {
  isPainting = false;
};

const drawing = (event) => {
  if (!isPainting) {
    return;
  }

  context.lineWidth = lineWidth;
  context.lineCap = "round";

  context.lineTo(event.clientX - canvasOffsetX, event.clientY);
  context.stroke();
};

context.strokeStyle = "#000000";
context.lineWidth = 2;

let isPainting = false;

canvas.addEventListener("mousedown", draw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", drawstop);
