$(".doubt .button").on("click", function(){
	$(".doubt .button").removeClass("active");
	$(this).addClass("active");
});

$(".doubt .button.var1").on("click", function(){
	$(".doubt .monthly").slideUp(function(){
		$(".in-the-end-of-term").slideDown();
	});
});

$(".doubt .button.var2").on("click", function(){
	$(".doubt .in-the-end-of-term").slideUp(function(){
		$(".monthly").slideDown();
	});
});


$('.doubt tr').on('click', function() {
	$(this).find('td.choise input').prop('checked', true);
})

$('.i-want').on('click', function() {
	$(".doubt").slideUp();
	$(".form").slideDown();	
})

$('.change-deposit').on('click', function() {
	$(".form").slideUp();
	$(".doubt").slideDown();	
})

// $('.i-want').on('click', function() {
// 	$(".doubt").slideUp(function(){
// 		$(".form").slideDown();	
// 	});
// })

// $('.change-deposit').on('click', function() {
// 	$(".form").slideUp(function(){
// 		$(".doubt").slideDown();
// 	});	
// })