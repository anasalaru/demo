function changeInputValue (selectionId, value) {
  document.getElementById(selectionId).value = value;  
}

function toggleClass(selectionId, className, value) {
  if(typeof value !== 'undefined') {
    value
      ? document.getElementById(selectionId).classList.add(className)
      : document.getElementById(selectionId).classList.remove(className);
  } else {
    var el = document.getElementById(selectionId);
    if(el.classList.value.indexOf(className) !== -1) {
      el.classList.remove(className)
    } else {
      el.classList.add(className)
    }
  }
}

function chooseOption (dropdownMenuId, selectionId, value) {
  changeInputValue(selectionId, value);
  toggleClass(dropdownMenuId, 'hidden');
}

function chooseColor (dropdownMenuId, selectionId, value) {
  toggleClass(selectionId, 'color-choice', true);
  document.getElementById(selectionId).value = value;
  document.getElementById(selectionId).style.backgroundColor = value;
  document.getElementById(selectionId).style.color = value;
  toggleClass(dropdownMenuId, 'hidden');
}

function displayCarLogo(car) {
  document.getElementById('car-logo-placeholder').src = carImages[car];
}

function validateForm() {
  var formValidated = true;
  fields.forEach(function (field) {
    if(document.myform[field.name].offsetParent !== null && !field['validationType'](field.name, field.errorId)) {
      toggleClass(field.errorId, 'hidden', false);
      formValidated = false;
    } else {
      toggleClass(field.errorId, 'hidden', true);  
    }
  })
  if(formValidated === true) {
    toggleClass('modal-container', 'open')
  }
  return false;
}