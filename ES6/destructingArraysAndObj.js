const fighters = [
  "Anderson Silva",
  "Georges St-Pierre",
  "Jon Jones",
  "Conor McGregor",
  "Khabib Nurmagomedov",
  "Demetrious Johnson",
  "Daniel Cormier",
];

const [ name1, name2, name3, name4, name5, name6, name7 ] = fighters;

console.log(name1); // Anderson Silva
console.log(name2); // Georges St-Pierre
console.log(name3); // Jon Jones
console.log(name4); // Conor McGregor
console.log(name5); // Khabib Nurmagomedov
console.log(name6); // Demetrious Johnson
console.log(name7); // Daniel Cormier
console.log();
console.log();

// with rest operator
const [ name11, name22, ...rest ] = fighters;

console.log(name11); // Anderson Silva
console.log(name22); // Georges St-Pierre
console.log(rest); // [ 'Jon Jones', 'Conor McGregor', 'Khabib Nurmagomedov', 'Demetrious Johnson', 'Daniel Cormier' ]


// Arrays and Objects at the same time
const fightersBellator = [
  { name: "Patricio Freire", weight: "featherweight" },
  { name: "Douglas Lima", weight: "welterweight" },
  { name: "Vadim Nemkov", weight: "light heavyweight" },
  { name: "Cris Cyborg", weight: "featherweight" },
  { name: "Juan Archuleta", weight: "bantamweight" },
  { name: "Veta Arteaga", weight: "flyweight" },
  { name: "Julius Anglickas", weight: "light heavyweight" },
];

const [ { name: name111, weight: weight111 }, 
  { name: name222, weight: weight222 }, ...restt ] 
  = fightersBellator;

console.log(name111); // Patricio Freire
console.log(weight111); // featherweight
console.log(name222); // Douglas Lima
console.log(weight222); // welterweight
console.log(restt); // prints the rest of the array of objects


const andersonSilva = {
  promotions: ["UFC", "PRIDE", "Rizin", "Cage Rage", "EliteXC", "Shooto"],
};

const { promotions: promotions } = andersonSilva;

console.log(promotions); // [ 'UFC', 'PRIDE', 'Rizin', 'Cage Rage', 'EliteXC', 'Shooto' ]
