var canvas = HTMLCanvasElement;
var ctx = CanvasRenderingContext2D;

function gameLoop() {
    requestAnimationFrame(gameLoop);
 }
 
 window.onload = () => {
    var canvas = HTMLCanvasElement.document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    gameLoop();
 }