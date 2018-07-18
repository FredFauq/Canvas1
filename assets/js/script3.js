var c = document.getElementById( 'home' );
var ctx = c.getContext('2d');

// Carosserie
ctx.beginPath();
ctx.fillStyle = '#00B353';
ctx.fillRect(50,190,350,70);
ctx.fillRect(120,130,210,70);
ctx.closePath();
//roues
ctx.beginPath();
ctx.fillStyle = '#CDCDCD';
ctx.arc(80,300,40,0,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(370,300,40,0,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();
