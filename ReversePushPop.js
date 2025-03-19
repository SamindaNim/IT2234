//Reverse the array using push and pop
let array = ['a','b','c','d']
let con = array.length
let newArray = []
console.log(array)

	for(let i=0; i< con; i++)
	{
		newArray.push(array.pop())
	}
	
	console.log(newArray)