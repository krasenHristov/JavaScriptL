let players = {
	John: 100,
	Pete: 90,
	Mary: 80,
	Thomas: 70,
	Adam: 60,
};


function getGold(players) {
	for (let [player, value] of Object.entries(players)) {
		if (value >= 90 && value <= 100) {
			console.log(`${player} gets Platinum`);
		}
		if (value >= 80 && value < 90) {
			console.log(`${player} gets Gold`);
		}
		if (value >= 70 && value < 80) {
			console.log(`${player} gets Silver`);
		}
		if (value < 70 && value >= 60) {
			console.log(`${player} gets Bronze`);
		}
	}
}

getGold(players);

console.log(players.Mary);

// tenary operator
let checkScore = players.John >= 90 ? "Platinum" : "Gold";
console.log(checkScore);
