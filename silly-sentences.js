$(document).ready(function(){
	$("#random").click (function(){
		$("#heading").remove();
		$("#description").remove();
		$("#random").html("Do it again!").attr("id","repeat");
		$("#reset").html("RESET PAGE");
		generateSentence.generateIt();
	});
	$("#go").click (function(){
		generateSentence.createSentence();
	});
	var generateSentence = {
			generateIt: function()  {
				var sillySentence = "In a [place] a long time ago, there lived a [animal] that liked to [action] [object].";
				var places = ["crater", "lake", "jungle", "desert", "castle", "caravan", "field", "pond", "yurt", "canoe"];
				var animals = ["tiger", "monkey", "dog", "numbat", "hedgehog", "ferret", "bandicoot", "penguin", "turtle", "worm", "giraffe", "sloth", "panda", "squirrel"];
				var actions = ["sit on", "smell", "do the tango with", "cuddle", "play chess with", "do the twist with", "tickle", "sneeze on", "hang out with", "play ping-pong with"];
				var objects = ["elephants", "puppets", "armadillos", "gorrillas", "socks", "chickens", "turtles", "possums", "baboons", "pigeons", "koalas", "underpants", "slugs"];
				var randomWord = Math.floor(Math.random()*places.length);
				sillySentence = sillySentence.replace("[place]", places[randomWord]);
				var randomWord1 = Math.floor(Math.random()*animals.length);
				sillySentence = sillySentence.replace("[animal]", animals[randomWord1]);
				var randomWord2 = Math.floor(Math.random()*actions.length);
				sillySentence = sillySentence.replace("[action]", actions[randomWord2]);
				var randomWord3 = Math.floor(Math.random()*objects.length);
				sillySentence = sillySentence.replace("[object]", objects[randomWord3]);
				$("#result").html(sillySentence);
				var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857","#C94E8F", "#C94E84", "#84C94E"];
				var randomColor = document.getElementById("result");
				var randomButtonColor = document.getElementById("repeat");
				randomColor.style.color = colors[Math.floor(Math.random()*colors.length)];
				randomButtonColor.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
			},
			createSentence: function(){
				var sillySentence = "In a [place] a long time ago, there lived a [animal] that liked to [action] [object].";
			    var placeInput = document.getElementById("place").value;
			    if (placeInput ==="")  {
			        alert("Enter a place");
			        return false;
			    } else if (placeInput === "mountain" || placeInput === "hill" || placeInput === "rock" 
			    	|| placeInput === "hillside" || placeInput === "mountain top" || placeInput === "plain"){
			    	sillySentence = sillySentence.replace("[place]", placeInput).replace("In","On");
			    } else {
			    	sillySentence = sillySentence.replace("[place]", placeInput);
			    }
			    var animalInput = document.getElementById("animal").value;
			    if (animalInput ==="")  {
			        alert("Enter a type of animal");
			        return false;
			    } else if (animalInput.match(/\b[aeiou]/))	{
			    	sillySentence = sillySentence.replace("[animal]", animalInput).replace("lived a","lived an");
			    } else {
				    sillySentence = sillySentence.replace("[animal]", animalInput);
			    }
				var actionInput = document.getElementById("action").value;
				if (actionInput ==="")  {
			        alert("Enter an action");
			        return false;
			    } else {
				   sillySentence = sillySentence.replace("[action]", actionInput);
			    }
				var objectInput = document.getElementById("object").value;
				if (objectInput ==="")  {
			        alert("Enter an object");
			        return false;
			    } else {
				   sillySentence = sillySentence.replace("[object]", objectInput);	
			    }
				$("#headingPart2").remove();
				$("#descriptionPart2").remove();
				$("#go").remove();
				$("input").remove();
				$("#resultPart2").html(sillySentence);
				$("#resetPart2").html("DO IT AGAIN!").css({
					"background-color":"purple", 
					"border-radius": "8px",
					"color": "white",
					"padding": "15px 32px",
					"text-align": "center",
					"text-decoration": "none",
					"display": "inline-block",
					"font-size": "16px",
					"outline": "none"});
				
			}
			
	}
$("#reset").click (function(){
	window.location.reload();
});
$("#resetPart2").click (function(){
	window.location.reload();
});


	
});
