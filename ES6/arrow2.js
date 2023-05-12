const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => 2 * number);

console.log(doubled);


const members = {
  names: ['Tom', 'Jerry'],
  teamName: 'Justice League',
  teamSummary: function() {
    return this.names.map(function(member) {
      return `${member} is on team ${this.teamName}`;
	});
}};

console.log(members.teamSummary()); // teamName is undefined because 
//this is not the same this as the one in teamSummary


const members2 = {
  names: ['Tom', 'Jerry'],
  teamName: 'Justice League',
  teamSummary2: function() {
    return this.names.map((member) => {
      return `${member} is on team ${this.teamName}`;
    })}};

console.log(members2.teamSummary2()); // teamName is justice league because
// arrow function does not have its own this, it uses the this of the parent
// function, which is teamSummary2 in this case
    
