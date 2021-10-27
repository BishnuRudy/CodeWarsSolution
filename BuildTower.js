function buildTower(nFloors) {
	let tower = [];
	totalBlocks = nFloors * 2 - 1;

	for (let i = 0; i < nFloors; i++) {
		spaces = (totalBlocks - ( 2 * i + 1 )) / 2;
		tower.push(" ".repeat(spaces) + "*".repeat(2 * i + 1) + " ".repeat(spaces));
	}
	return tower;
}

console.log(buildTower(6));