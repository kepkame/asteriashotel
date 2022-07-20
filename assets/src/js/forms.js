/* jshint browser: true */

/**
 * Form Agree - Simple AntiSpam
 */
if(document.querySelector("input.agree")) {
  setTimeout(function() {
    let inputAgreeInvert = document.querySelectorAll("input.agree");

    Array.prototype.forEach.call(inputAgreeInvert, function(item) {
      item.checked = false;
      item.removeAttribute('checked');
    });
  }, 100);
}

/**
 * Booking form. Cancel form submission.
 */
if (document.querySelector('#promo-form')) {
  let promoForm = document.querySelector('#promo-form');
  promoForm.addEventListener('submit', function(event) {
    event.preventDefault();
  });
}

/**
 * Submit contact form
 */
if (document.querySelector('#form-contacts')) {
  let formWrap = document.querySelector('#form-contacts');
  let form = formWrap.querySelector('form');
  let formResponce = formWrap.querySelector('.simple-form__response-output');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (form.querySelector("input.agree").checked) {
      // If the anti-spam checkbox is checked
      let textErrorAgree = 'Возникла ошибка при отправки формы. Пожалуйста, перезагрузите страницу и попробуйте отправить форму заново.';
      
      // Show notice
      formWrap.classList.add('invalid');
      formResponce.innerHTML = textErrorAgree;

      // Hide notice
      setTimeout(function() {
        formWrap.classList.remove('invalid');
        formResponce.innerText = '';
      }, 7000);
    } else if (!form.querySelector(".simple-form__row--asseptance input").checked) {
      // If the box for agreeing to terms and conditions is not checked
      if (!form.querySelector('.agree-notice')) {
        let label = form.querySelector(".simple-form__row--asseptance");
        let text = 'Пожалуйста, поставьте галочку для отправки формы';

        // Create notice
        let agree = document.createElement('div');
        agree.classList.add('agree-notice');
        agree.innerHTML = text;
        label.appendChild(agree);
  
        // Show notice
        setTimeout(function() {
          agree.classList.add('agree-notice--show');
        }, 100);
  
        // Hide notice
        setTimeout(function() {
          agree.remove();
        }, 4000);
      }
    } else {
      // Successful form submission
      let textResponce = 'Форму успешно отправлена!';
      let inputs = form.querySelectorAll('.simple-form__input');
      
      // Show notice
      formWrap.classList.add('sent');
      formResponce.innerText = textResponce;

      // Clear form fields
      inputs.forEach(function(item) {
        item.value = "";
      });

      // Hide notice
      setTimeout(function() {
        formWrap.classList.remove('sent');
        formResponce.innerText = '';
      }, 5000);
    }
  });
}