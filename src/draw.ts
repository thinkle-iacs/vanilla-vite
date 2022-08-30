import {drawGuide} from './graphPaper';

let canvas = document.createElement('canvas');
// Fetch the <div id="app"></div> element from
// our HTML (in index.html)
let app = document.querySelector('#app');
// Add the canvas to that element
app.appendChild(canvas);

// Set up the canvas width/height
canvas.width = 500; // drawing size
canvas.height = 500; // drawing size
canvas.style.width = '500px'; // display size
canvas.style.height = '500px';  // display size
canvas.style.border = '3px solid blue';

// This next line draws some graph paper using code I wrote in
// graphPaper.js -- comment this out to remove the graph paper!
drawGuide(canvas);

let ctx = canvas.getContext('2d');
ctx?.beginPath();
ctx.arc(100,100,40,0,Math.PI*2);
ctx?.stroke();