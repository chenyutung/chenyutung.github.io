
$(document).ready(function () {

	var bodyCls = $('body');
	var wisheTxt = $('#wishe-txt span');
	var actionSwitch = $('#action-switch');
	var actionTxt = $('#action-txt');
	var actionBx = $('#action-bx');

	$(actionSwitch).on('click', function() {

		bodyCls.toggleClass('day');
		actionSwitch.toggleClass('day');

		if( wisheTxt.html() === 'Morning' ) {
			wisheTxt.html('Night');
		} else {
			wisheTxt.html('Morning');
		}

	});

});