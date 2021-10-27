function filter_list(list) {
	return list.filter( (elem) => typeof elem == "number" && elem >= 0 );  
}
console.log(filter_list([1,2,'aasf','1','123',123]));