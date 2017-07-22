var carImages = {
  'Audi': 'https://8096-presscdn-0-43-pagely.netdna-ssl.com/wp-content/uploads/2014/10/audi-logo.jpg',
  'Bentley': 'https://8096-presscdn-0-43-pagely.netdna-ssl.com/wp-content/uploads/2014/10/Bentley-Logo.jpg',
  'Fiat': 'https://8096-presscdn-0-43-pagely.netdna-ssl.com/wp-content/uploads/2014/10/fiat-logo.jpg',
  'Ford': 'https://8096-presscdn-0-43-pagely.netdna-ssl.com/wp-content/uploads/2014/10/ford-logo.jpg',
  'Hyundai': 'https://8096-presscdn-0-43-pagely.netdna-ssl.com/wp-content/uploads/2014/10/hyundai-logo.jpg',
  'Honda': 'https://8096-presscdn-0-43-pagely.netdna-ssl.com/wp-content/uploads/2014/10/honda-logo.jpg',
  'Kia': 'https://8096-presscdn-0-43-pagely.netdna-ssl.com/wp-content/uploads/2014/10/Kia-Motors-Logo.jpg',
  'Mazda': 'https://8096-presscdn-0-43-pagely.netdna-ssl.com/wp-content/uploads/2014/10/mazda-logo.jpg',
  'Mercedes-Benz': 'https://8096-presscdn-0-43-pagely.netdna-ssl.com/wp-content/uploads/2014/10/Mercedes-Benz-Logo.jpg',
  'Mini': 'https://8096-presscdn-0-43-pagely.netdna-ssl.com/wp-content/uploads/2014/10/Mini-Car-Logo1.jpg'
}

var fields = [
  {
    id: 'dropdown-selection-brand',
    name: 'dropdownselectionbrand',
    errorId: 'dropdown-brand-error',
    validationType: notEmptyValidation
  },
  {
    id: 'input-year',
    name: 'input-year',    
    errorId: 'input-year-error',
    validationType: yearValidation
  },
  {
    id: 'input-mileage',
    name: 'input-mileage',    
    errorId: 'input-mileage-error',
    validationType: numberValidation
  },
  {
    id: 'fuel-type',
    name: 'fuel-type',
    errorId: 'input-fuel-error',
    validationType: notEmptyValidation
  },
  {
    id: 'dropdown-selection-color',
    name: 'dropdown-selection-color',
    errorId: 'dropdown-color-error',
    validationType: notEmptyValidation
  },
  {
    id: 'input-radio-wrapper',
    name: 'damaged',
    errorId: 'input-damaged-error',
    validationType: notEmptyValidation
  },
  {
    id: 'textarea-damage',
    name: 'textarea-damage',
    errorId: 'textarea-damage-error',
    validationType: notEmptyValidation
  },
  {
    id: 'input-price',
    name: 'input-price',
    errorId: 'input-price-error',
    validationType: numberValidation
  },
  {
    id: 'dropdown-selection-currency',
    name: 'dropdown-selection-currency',
    errorId: 'dropdown-currency-error',
    validationType: notEmptyValidation
  },
  {
    id: 'textarea-description',
    name: 'textarea-description',
    errorId: 'textarea-description-error',
    validationType: notEmptyValidation
  }
]

function notEmptyValidation(name, errorFieldId) {
  return document.myform[name].value ? document.myform[name].value.length > 0 : false;
}

function yearValidation(name, errorFieldId) {
  var pattern = new RegExp(/^[1-9]\d{3}$/);
  return document.myform[name].value
    ? pattern.test(document.myform[name].value) && parseInt(document.myform[name].value) <= 2017
    : false
}

function numberValidation(name, errorFieldId) {
  var pattern = new RegExp(/^[1-9]\d*[\.]?\d*$/);
  return document.myform[name].value ? pattern.test(document.myform[name].value) : false
}
