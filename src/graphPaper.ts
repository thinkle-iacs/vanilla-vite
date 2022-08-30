/**
* Draw graph-paper on the canvas and also provide 
* numbers to show how the coordinate plane works
* in JavaScript.
*
* @param {HTMLCanvasElement} canvas
**/
export function drawGuide (canvas : HTMLCanvasElement) {
    let ctx = canvas.getContext('2d');
    if (!ctx) {
        return;
    }
    let originalStroke = ctx.strokeStyle;
    let originalFill = ctx.fillStyle;
    ctx.strokeStyle = '#aaa';
    ctx.fillStyle = '#666';
    for (let i=25; i<canvas.width; i += 25) {
      ctx.moveTo(0,i);
      ctx.lineTo(canvas.width,i);
      ctx.stroke();
      ctx.fillText(`${i}`,5,i);
      ctx.moveTo(i,0);
      ctx.lineTo(i,canvas.height);
      ctx.stroke();
      ctx.fillText(`${i}`,i,15);
    }
    ctx.strokeStyle = originalStroke;
    ctx.fillStyle = originalFill;
  }