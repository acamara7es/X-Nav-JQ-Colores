// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
	$("#faq dt").click(function() {
		$(this).fadeOut("slow");
	});
	$("h3").click(function() {
		$("dt").fadeIn("slow");
	});

	//Fondo rojo para la lista completa
	$("#orderedlist").addClass("red");

	//Letra verde para cada elemento de la lista
	$("#orderedlist").find("li").each(function() {
		$(this).addClass("green");
	});

	//Cambio de color del último elemento de la lista al poner el ratón sobre él.
	$("#orderedlist li").last().hover(function() {
		$(this).addClass("blue");
		$(this).removeClass("green");
	}, function() {
		$(this).removeClass("blue");
		$(this).addClass("green");
	});
});
