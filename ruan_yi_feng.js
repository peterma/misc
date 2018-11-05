(()=>{
	$("#header").remove();
	$(".asset-header").remove();
	$(".entry-sponsor").remove();
	$(".asset-footer").remove();
	$(".buzzButton").remove();
	$("#related_entries").remove();
	$("#cre").remove();
	$("#comments").remove();
	$(".entry-asset").nextElementSibling.remove();
	$("#footer").remove();
	$("body.one-column #container").style.width = "95%";
	$("body").querySelectorAll("p, li").forEach(p => {p.style.fontSize = "1.2em"});
	$("body").querySelectorAll("h2").forEach(p => p.style.fontSize = "1.8em");
	$("body").querySelectorAll("code").forEach(p => p.style.fontSize = "1.1em");
	$("body").querySelectorAll("h1").forEach(p => p.style.lineHeight = "100%");
})();
