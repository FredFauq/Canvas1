var c = document.getElementById( 'home' );
var ctx = c.getContext('2d');
ctx.fillStyle = '#D38435';
ctx.moveTo(200, 30);
ctx.lineTo(300, 120);
ctx.lineTo(100, 120);
ctx.lineTo(200, 30);
ctx.fill();
// Mur
ctx.fillStyle = '#A4D7E7';
ctx.fillRect(100,120,200,200);
// Fenêtre
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(120,140,40,40);
// Fenêtre
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(240,140,40,40);
// Porte
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(170,240,60,80);
