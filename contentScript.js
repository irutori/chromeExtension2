$(".menu")[0].style.display="none";

var adv=$(".container_all table");
for(var i=0;i<adv.size();i++){
	adv[i].style.display="none";
}
var frame=$(".container_all iframe");
for(var i=0;i<frame.size();i++){
	frame[i].style.display="none";
}

var pop=$(".popularArticlesWithImage");
for(var i=0;i<pop.size();i++){
	pop[i].style.display="none";
}
var title = $(".column_title");
for(var i=0;i<title.size();i++){
	title[i].style.display="none";
}
var rss=$(".head_rss");
for(var i=0;i<rss.size();i++){
	rss[i].style.display="none";
}
$(".footer")[0].style.display="none";
$(".column_right")[0].style.display="none";