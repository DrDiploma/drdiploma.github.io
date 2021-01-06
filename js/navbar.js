$(function () {
	$(".toggle").on("click", function(){
		var item = $(".item")
		var itemClass = 'active'
		var designCont = $('.container')

		if(item.hasClass(itemClass)){
			item.removeClass(itemClass)
			designCont.css("position", "relative")
			designCont.css("top", "10px")
		} else{
			item.addClass(itemClass)
			designCont.css("position", "relative")
			designCont.css("top", "150px")
		}
	});


});