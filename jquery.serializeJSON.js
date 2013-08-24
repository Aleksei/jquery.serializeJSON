// jQuery serialize json plugin
jQuery.fn.serializeJSON = function(){
	var $form=$(this);

	if ( $form[0].tagName.toLowerCase() !== 'form' ) {
		$form = $form.find('input, select, textarea');
	}

	var arr = $form.serializeArray();
	var pars = {};

	for ( var i=0, length = arr.length; i<length; i++ ){
		pars[ arr[i].name ] = arr[i].value;
	}

	$form.find('input[type=radio]').each(function(){
		var $el = $(this);
		var name = $el.attr('name');
		if ( typeof pars[name] == 'undefined' ){
			pars[name] = false;
		}
	});

	$form.find('input[type=checkbox]').each(function(){
		var $el = $(this);
		var name = $el.attr('name');
		if ( typeof pars[name] == 'undefined' ){
			pars[name] = false;
		} else {
			pars[name] = true
		}
	});

	return pars;
};