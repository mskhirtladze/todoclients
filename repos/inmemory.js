var todos = [];
var repo = {
	add: function(todo) { //POST
		todo.id = Math.max.apply(null, todos.map(function(x) { return x.id }).concat(0) ) + 1,
		todos.push(todo);
	},
	update: function(todo) { //PUT
		var oldTodo = todos.filter(function(x) {
			return x.id == todo.id;
		})[0];
		oldTodo.title = todo.title;
	},
	remove: function(id){ //DETELE
		todos = todos.filter(function(x) {
			return x.id != id;
		});
	},
	list: function(){ //GET
		return todos;
	}
}