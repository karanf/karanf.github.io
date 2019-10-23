$(document).ready(function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

	ctx.font = '40pt Helvetica';
    ctx.fillStyle = '#d2d2d2';
    ctx.fillText('Hello World!', 50, 150);


     var x = canvas.width / 2;
      var y = canvas.height / 2;
      var radius = 75;
      var startAngle = 1.1 * Math.PI;
      var endAngle = 1.9 * Math.PI;
      var counterClockwise = false;

    ctx.beginPath();
	ctx.moveTo(100, 150);
	ctx.lineTo(550, 50);
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#c5c5c5';
	ctx.lineCap = 'round';
	ctx.stroke();


	ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
      ctx.lineWidth = 3;

      // line color
      ctx.strokeStyle = 'black';
      ctx.stroke();
});