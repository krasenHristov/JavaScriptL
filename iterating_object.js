const circle = {
  radius: 1,
  draw() {
	console.log('draw');
  }
};

for (let key in circle)
  console.log(key, circle[key]);

// returns the key only
for (let key of Object.keys(circle))
  console.log(key);

// returns the key and value as an array
// [ 'radius', 1 ]
for (let key of Object.entries(circle))
  console.log(key[0], key[1]);
