function catagorizeMembers(info) {
	let catagory = [];
	info.forEach( elem => {
		if (elem[1] <= 26 && elem[1] >= -2) {
			if (elem[0] >= 55 && elem[1] > 7)
				catagory.push("Senior");
			else catagory.push("Open");
		}

	})
	return catagory;
}

console.log(catagorizeMembers([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
))
