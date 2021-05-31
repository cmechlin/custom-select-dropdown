import Select from './Select.js'
//import Select from './js/selector/select';
/*
test
*/
const selectElements = document.querySelectorAll('[data-custom]')

selectElements.forEach(elements => {
  new Select(elements)
})