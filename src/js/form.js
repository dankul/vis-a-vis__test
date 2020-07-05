// получаем объект формы
var form = document.forms.data;
// прикрепляем обработчик кнопки
form.addEventListener("submit", sendRequest);

// обработчик нажатия
function sendRequest(event){
  event.preventDefault();
  
  let formData = new FormData(form),
      request = new XMLHttpRequest();
  
  request.open("POST", "/form-sending");
  
  request.onload = function () {
    if (request.ok) {
      console.log("la-la-lend");
    } else {
      alert(request.status + ' ' + request.statusText);
    }
  };
  
  request.send(formData);
}