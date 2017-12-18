//start with an empty list
var todoList = [];

//ask the user what they want to do
var input = prompt("What would you like to do?");

//handle the input
while(input !== "quit"){
	
	if(input === "list"){
		listTodos(todoList);
	}
	else if(input === "new"){
		addTodo();
	}
	else if(input === "delete"){
		deleteTodo();
	}
	//ask for new input
	input = prompt("Now what would you like to do?");
}

//quit the app
console.log("You've quit the app");

function listTodos(arr){
	console.log("**********************");
	arr.forEach(function(x,i){
		console.log(i +": " + x);
	});
	console.log("**********************");
}

function addTodo(){
	var todo = prompt("What would you like to add to the list?");
	todoList.push(todo);
	console.log("added Todo");
}

function deleteTodo(){
	listTodos(todoList);
	var deleteTodo = prompt("Which todo would you like to delete?");
	todoList.splice(deleteTodo,1);
	console.log("deleted Todo")
}
