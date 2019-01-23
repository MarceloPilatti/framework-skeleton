$(function(){
	$("[data-toggle='tooltip']").tooltip({html:true});
	$("#navbar a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
	modalConfig();
	backToTopConfig();
	$('ul li.dropdown').hover(()=>{
		$(this).find('.dropdown-menu').stop(true,true).delay(50).fadeIn(0);
	},function(){
		$(this).find('.dropdown-menu').stop(true,true).delay(50).fadeOut(0);
	});
	$('body').click(function(){
		$("[data-toggle='tooltip']").tooltip('hide');
	});
});
const modalConfig= () => {
	$(document).keypress((e)=>{
		if($('.modal').hasClass('show')&&(e.keycode==13||e.which==13)){
			let shiftKey=e.shiftKey;
			if(shiftKey){
				return;
			}
			if($('.modal.show .btn-primary').is(':visible')){
				$('.modal.show .btn-primary:visible')[0].click();
			}else{
				$('.modal.show .btn-secondary:visible')[0].click();
			}
		}
	});
};

const backToTopConfig=() => {
	let offset=320;
	let duration=500;
	jQuery(window).scroll(()=>{
		if(jQuery(this).scrollTop()>offset){
			jQuery('#back-to-top').fadeIn(duration);
		}else{
			jQuery('#back-to-top').fadeOut(duration);
		}
	});
	jQuery('#back-to-top').click((event)=>{
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop:0
		},duration);
		return false;
	});
};