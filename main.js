var key = "API_KEY";

$(document).ready(function(){


	$.getJSON("https://covid-19-data.p.rapidapi.com/totals?format=json?format=json&rapidapi-key="+key, 
		function(data){
			console.log(data);

			var confirmed = data[0].confirmed;
			$('.world .confirmed .data').html(confirmed);

			var recovered = data[0].recovered;
			$('.world .recovered .data').html(recovered);

			var deaths = data[0].deaths;
			$('.world .deaths .data').html(deaths);
	});



	// button onclick
	$(".btn").click(function(){
			
		$.getJSON("https://covid-19-data.p.rapidapi.com/country?format=json&name="+$('.country').val()+"&rapidapi-key="+key, 
		function(data){
			console.log(data);

			$('.res').css('display', 'block');

			var name = data[0].country;
			var code = data[0].code;
			$('.res .name').html(name + " ("+code+")");

			var confirmed = data[0].confirmed;
			$('.res .confirmed .data').html(confirmed);

			var recovered = data[0].recovered;
			$('.res .recovered .data').html(recovered);

			var deaths = data[0].deaths;
			$('.res .deaths .data').html(deaths);


		});

	});
});


