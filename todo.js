//start with an empty list
var todoList = [];

//ask the user what they want to do
var input = prompt("What would you like to do?");
//handle the input

while(input !== "quit"){
	
	if(input === "list"){
		console.log(todoList);
		
	}
	else if(input === "new"){
		var todo = prompt("What would you like to add to the list?");
		todoList.push(todo);

	}

	input = prompt("Now what would you like to do?");
}

//quit the app
console.log("You've quit the app");
