var repo = {
	wrapper: function(f){
		var todos = JSON.parse(localStorage.getItem('todos'))

		var todos = f(todos);

		localStorage.setItem('todos', JSON.stringify(todos));

		return todos;
	},
	add: function(todo) {
		this.wrapper(function(todos){
			todo.id = Math.max.apply(null, todos.map(function(x) { return x.id }).concat(0) ) + 1,
			todos.push(todo);
			return todos;
		})
	},
	update: function(todo) {
		this.wrapper(function(todos){
			var oldTodo = todos.filter(function(x) {
				return x.id == todo.id;
			})[0];
			oldTodo.title = todo.title;
			return todos;
		})
	},
	remove: function(id){
		this.wrapper(function(todos){
			return todos.filter(function(x) {
				return x.id != id;
			});
		})
	},
	list: function(){
		return this.wrapper(function(todos){
			return todos;
		})
	}
}

if(!localStorage.getItem('todos')) {
	localStorage.setItem('todos', "[]");
}