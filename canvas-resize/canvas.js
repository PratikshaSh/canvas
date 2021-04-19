var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//contact
//returning a drwing contact to variable c
var c = canvas.getContext('2d');
c.fillStyle = 'rgba(255,0,0,0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0,255,0,0.5)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0,0,255,0.5)';

c.fillRect(300, 300, 100, 100);


console.log(canvas);

//line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a3"
c.stroke();

//arc /circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

for(var i=0; i<1000; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle =   "rgba(" + 
                                Math.random() * 255 + "," + // Randomly generated brightness for color red 
                                Math.random() * 255 + "," + // Randomly generated brightness for color green 
                                Math.random() * 255 + "," + // Randomly generated brightness for color blue
                                Math.random() + ")";             // Randomly generated transparency for alpha
    c.stroke();

}
