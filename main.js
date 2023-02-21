$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value === '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "./mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.popup').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.close-popup').click(function() { // по клику на крестик
	$('.popup').fadeOut();
});

$('.button-menu').click(function() { // по клику на close
	$('.popup').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.popup').fadeOut();
	}
});