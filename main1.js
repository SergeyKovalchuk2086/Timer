const form = document.getElementById('form')
const btn = document.getElementById('form-button')
const popup = document.getElementById('popup')
const close_popup = document.getElementById('close-popup')
const close_popup2 = document.getElementById('close-popup2')
const inputField = document.getElementById('input-field')


form.addEventListener('submit', onSubmit)

close_popup.addEventListener('click', () => { popup.style.display = "none" })
close_popup2.addEventListener('click', () => { popup.style.display = "none" })

async function onSubmit (event) {
  event.preventDefault() // чтобы страница не перезагружалась при клике
  
  if (!inputField.value.length) return
  
  inputюмфдг

  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts',  {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
      }
    })

    if (result.ok) {
        popup.style.display = "block";
    }
  } catch (e) {
    // здесь показываем popup с неудачей
    console.log('error try to post data :', e)
  }
}


// $(document).ready(function() {
// 	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
// 		if (document.form.name.value === '' ) {
// 			valid = false;
// 			return valid;
// 		}
// 		$.ajax({
// 			type: "POST",
// 			url: "./mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			$('.popup').fadeIn();
// 			$(this).find('input').val('');
// 			$('#form').trigger('reset');
// 		});
// 		return false;
// 	});
// });
//
// // Закрыть попап «спасибо»
// $('.close-popup').click(function() { // по клику на крестик
// 	$('.popup').fadeOut();
// });
//
// $('.button-menu').click(function() { // по клику на close
// 	$('.popup').fadeOut();
// });
//
// $(document).mouseup(function (e) { // по клику вне попапа
// 	var popup = $('.popup');
// 	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
// 		$('.popup').fadeOut();
// 	}
// });
