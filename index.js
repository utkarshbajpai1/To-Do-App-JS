(function(){

				var input = document.getElementById("input");
				var btn   = document.getElementById("btn");

				var lists = {
					todo : document.getElementById("todo"),
					done : document.getElementById("done")	
				};	

				

				var makeTaskHtml 	= function(str, onCheck){
					var el 		 	= document.createElement("li");
					var checkbox 	= document.createElement("input");
					var label 		= document.createElement("span");

					checkbox.type 	   = "checkbox";
					checkbox.addEventListener("click", onCheck, false);
					label.textContent  = str;		
 					
					el.appendChild(checkbox);	
					el.appendChild(label);
					return el;	
				};

				var onCheck = function(event){
					var task = event.target.parentNode; // gives li element
					//lists.done.appendChild(a);

					var list = task.parentNode.id;
					lists[list === 'todo' ? 'done' : 'todo'].appendChild(task);
					this.checked = false;


				};

				var addTask = function(task){

					lists.todo.appendChild(task);
				};

				//addTask(lists.todo, makeTaskHtml(" To-Do-Task ", onCheck));
				//addTask(lists.done, makeTaskHtml(" Done-Task ", onCheck));

				var onInput    = function(event){
					var str    = input.value.trim();
					if (str.length > 0) {
						addTask(makeTaskHtml(str, onCheck));
						input.value = '';
						input.focus();	
					}

					
				};

				btn.addEventListener('click', onInput, false);
				
				input.addEventListener('keyup', function(event){
					var code = event.keyCode;
					if ( code === 13 ) {
						onInput();
					}
				});
				
				


				//lists.todo.appendChild(" This ones work without declaration .....");

}());