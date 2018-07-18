var c = document.getElementById( 'home' );
var ctx = c.getContext('2d');
ctx.beginPath();      // toit
ctx.fillStyle = '#D38435';
ctx.moveTo(200, 30);
ctx.lineTo(300, 120);
ctx.lineTo(100, 120);
ctx.lineTo(200, 30);
ctx.fill();
ctx.closePath();
ctx.beginPath();      // mur
ctx.fillStyle = '#A4D7E7'
ctx.moveTo(100, 120);
ctx.lineTo(300, 120);
ctx.lineTo(300, 320);
ctx.lineTo(100, 320);
ctx.fill();
ctx.closePath();
ctx.beginPath();      // fenêtre gauche
ctx.fillStyle = '#C9C9C9'
ctx.moveTo(120, 140);
ctx.lineTo(160, 140);
ctx.lineTo(160, 180);
ctx.lineTo(120, 180);
ctx.fill();
ctx.closePath();
ctx.beginPath();      // fenêtre droite
ctx.fillStyle = '#C9C9C9'
ctx.moveTo(240, 140);
ctx.lineTo(280, 140);
ctx.lineTo(280, 180);
ctx.lineTo(240, 180);
ctx.fill();
ctx.closePath();
ctx.beginPath();      // porte
ctx.fillStyle = '#C9C9C9'
ctx.moveTo(170, 240);
ctx.lineTo(230, 240);
ctx.lineTo(230, 320);
ctx.lineTo(170, 320);
ctx.fill();
ctx.closePath();
