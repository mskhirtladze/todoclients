var repo = {
	add: function(todo) {
		return $.post("http://todos.flexbox.ge/api/todos", todo);
	},
	update: function(todo) {
		return $.ajax({
			url: 'http://todos.flexbox.ge/api/todos/' + todo.id,
			method: 'PUT',
			data: todo
		});
	},
	remove: function(id) {
		return $.ajax({
			url: 'http://todos.flexbox.ge/api/todos/' + id,
			method: 'DELETE'
		});
	},
	list: function(){
		return $.get("http://todos.flexbox.ge/api/todos");
	},
	get: function(id){
		return $.get("http://todos.flexbox.ge/api/todos/" + id);
	}
}