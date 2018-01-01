//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on x to delete todo
//this format will propogate the event listener to any
//additional elements that get created from our script
//same as above
$("ul").on("click", "span", function(e){
	
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	//prevents the bubbling effect where the click handlers
	//on other elements won't fire
	e.stopPropagation();
});

//add input to ul
$("input[type='text']").on("keypress", function(e){
	//if enter is pressed add value of input 
	//to end of list
	var input = $(this).val();

	if(e.which === 13 && input){
		
		$("ul").append("<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> "+ input +"</li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click", function(){
	$('input').fadeToggle(500,"linear");
});