const input = document.getElementsByClassName('todo-app__input');

const item = document.getElementsByClassName("todo-app__main");

const total = document.getElementById("total");

var list = new Array();
var iscom = {};

const ul = document.createElement("ul");
ul.setAttribute("class", "todo-app__list");

input[0].addEventListener('keyup', event =>{
	if(event.keyCode === 13 && event.target.value !== ''){
		
		list.push(input[0].value);
		input[0].value = '';
		iscom[list.length - 1] = false;
		
		const li = document.createElement("li");
		li.setAttribute("class", "todo-app__item");
		
		const head = document.createElement("div");
		head.setAttribute("class", "todo-app__checkbox");
		
		const head_check = document.createElement("input");
		head_check.setAttribute("id", list.length - 1);
		head_check.setAttribute("type", "checkbox");
		
		const check = document.createElement("label");
		check.setAttribute("for", list.length - 1);
		
		const todo = document.createElement("h1");
		todo.setAttribute("class", "todo-app__item-detail");
		todo.innerHTML = list[list.length - 1];
		
		const x = document.createElement("img");
		x.src = "./img/x.png";
		x.setAttribute("class", "todo-app__item-x");
		
		
		li.appendChild(head);
		head.appendChild(head_check);
		head.appendChild(check);
		li.appendChild(todo);
		li.appendChild(x);
		ul.appendChild(li);
		item[0].appendChild(ul);
		
		checked(list.length - 1);
		del(list.length - 1);
	}
})


var checked = function(a){
	const ch = document.getElementById(list.length - 1);
	count_func();
	ch.onclick = function(){
		if(iscom[a] === true)  iscom[a] = false;
		else  iscom[a] = true;
		dis(a);
	}
}

var all = document.getElementById("all");
var act = document.getElementById("active");
var com = document.getElementById("completed");
var clear = document.getElementById("clear");
var num = 0;
var count = 0;

var dis = function(x){
	var li = document.getElementsByClassName("todo-app__item");
	var string = document.getElementsByClassName("todo-app__item-detail");
	
	if(iscom[x] == true){
		string[x].innerHTML = list[x].strike();
		li[x].style.background = "linear-gradient(to right, #00FD6B, #23EDFF)";
	}  
	else {
		string[x].innerHTML = list[x];
		li[x].style.background = "#FFF";
	} 
	
	if (num == 1 && iscom[x] == true) {
		li[x].style.display = "none";
		count --;
		total.innerHTML = count + " left";
	} 
	else if (num == 2 && iscom[x] == false) {
		li[x].style.display = "none";
		count --;
		total.innerHTML = count + " left";
	} 
	
}

var count_func = function(){
	if (num == 1 && iscom[x] == false) {
		count ++;
		total.innerHTML = count + " left";
	}
	else if (num == 2 && iscom[x] == true) {
		count ++;
		total.innerHTML = count + " left";
	}
	else if(num == 0) {
		count ++;
		total.innerHTML = count + " left";
	} 
}

all.onclick = function(){
	var li = document.getElementsByClassName("todo-app__item")
	
	num = 0;
	count = 0;
	for(var i = 0; i < list.length; i++){
		if(iscom[i] == true || iscom[i] == false){
			li[i].style.display = "";
			count++;
		}
	}
	
	total.innerHTML = count + " left";
}

act.onclick = function(){
	var li = document.getElementsByClassName("todo-app__item")
	
	num = 1;
	count = 0;
	for(var i = 0; i < list.length; i++){
		if(iscom[i] === false){
			li[i].style.display = "";
			count ++;
		}    
		else  li[i].style.display = "none";
	}
	total.innerHTML = count + " left";
}

com.onclick = function(){
	var li = document.getElementsByClassName("todo-app__item")
	
	num = 2;
	count = 0;
	for(var i = 0; i < list.length; i++){
		if(iscom[i] === true){
			li[i].style.display = "";
			count ++;
		}  
		else  li[i].style.display = "none";
	}
	total.innerHTML = count + " left";
}

var del = function(a){
	var xx = document.getElementsByClassName("todo-app__item-x")
	var li = document.getElementsByClassName("todo-app__item")

    xx[a].onclick = function(){
		li[a].style.display = "none";
		iscom[a] = 'apple';
		
		count --;
		total.innerHTML = count + " left";
}
}

var clear_all = document.getElementById("clear")

clear_all.onclick = function(){
	var li = document.getElementsByClassName("todo-app__item")
	
	for(var i = 0; i < list.length; i++){
		if(iscom[i] == true){
			li[i].style.display = "none";
			iscom[i] = 'apple';
			count --;
		}
	}
	total.innerHTML = count + " left";
}