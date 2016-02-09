function getTodoConsoleLog(e) {
    if (e.target.readyState == XMLHttpRequest.DONE) {
        if(e.target.status == 200){
            console.log(e.target.response);
        }
        else if(e.target.status == 400) {
            alert('There was an error 400')
        }
        else {
            alert('something else other than 200 was returned')
        }
    }
}

function getTodos(id, callback) {
    callback = callback || getTodoConsoleLog;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callback;
    var url = "http://todos.flexbox.ge/api/todos";
    url = id ? url + "/" + id : url;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function postTodo(data){
    data = data || {title: "task", completed: false};
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("POST", "http://todos.flexbox.ge/api/todos");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(data));
}

function deleteTodo(id) {
    var xmlhttp = new XMLHttpRequest();   
    xmlhttp.open("DELETE", "http://todos.flexbox.ge/api/todos/" + id);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}

function udpateTodo(id, data) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("PUT", "http://todos.flexbox.ge/api/todos/" + id);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(data));
}