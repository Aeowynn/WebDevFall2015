$(function(){

	var skills = $("li[data-score]"),
		skillScore = "<div class='skill-score'></div>";

	skills.append(skillScore);

	for(var i = 0; i < skills.length; i++) {

		var el = $(skills[i]),
			skillScore = el.children(".skill-score"),
			score = el.data("score"),
			diff = 10 - score;
		
		for(var j = 0; j < score; j++) {
			skillScore.append(" &#x2605; ")
					  .css('color', '#4DB8E5');
		}

		for(var x = 0; x < diff; x++) {
			skillScore.append(" &#x2606; ");
		}

	}

});