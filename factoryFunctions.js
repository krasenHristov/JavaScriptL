function createCircle(radius) {
  return {
    radius,

    draw() {
	console.log('draw');
	   }

	};
}

const circle = createCircle(1);
console.log(circle); // {radius: 1, draw: ƒ}
circle.draw(); // draw
