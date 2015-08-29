$.fn.todoify = function(options){
	
	var default_options = {
		data:[],
		to:'body' 
	}
	var settings = $.extend(default_options,options);

	var render = function(item){
		var todo = $('<span></span>').addClass('todo');
		todo.text(item);
		$(settings.to).append(todo);
	};

	settings.data.forEach(render);


	var eventHandler = function(event){
		if(event.keyCode === 13){
			var item = $(this).val();
			render(item);
			$(this).val('').focus();
		}
	}

	$(this).keypress(eventHandler);

	return this;
}

$.fn.pressEnter = function(){
	var e = $.Event('keypress');
	e.keyCode = 13;
	$(this).trigger(e);

}

