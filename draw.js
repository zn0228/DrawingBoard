const canvas = document.getElementById("DrawCanvas");
let context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

context.strokeStyle = "#000000";
context.lineWidth = 2;

let isPainting = false;

canvas.addEventListener("mousedown");
canvas.addEventListener("mousemove");
canvas.addEventListener("mouseup");
