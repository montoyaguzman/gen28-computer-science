import { doOperation } from './operation.js';

const buttonElement = document.querySelector('#operation');
const selectElement = document.querySelector('#typeOperation');
var operationSymbolType = '';

selectElement.addEventListener('change', function(event) {
    operationSymbolType = selectElement.options[selectElement.selectedIndex].value;
});

buttonElement.addEventListener('click', function(e) {
    
    const num1 = getNumberById('num1');
    const num2 = getNumberById('num2');

    const result = doOperation(num1, num2, operationSymbolType);
    
    renderResult(result);
    
});

const getNumberById = (id) => {
    const element = document.querySelector(`#${id}`);
    const number = element.value !== '' ? parseFloat(element.value) : undefined;
    return number;
}

const renderResult = (resultado) => {
    const divResultElement = document.querySelector('#result');
    divResultElement.innerHTML = resultado;
}
