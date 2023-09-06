export const doOperation = (numero1, numero2, operationSymbolType) => {
    let result = 0;
    switch(operationSymbolType) {
        case '+':
            result = numero1 + numero2;
        break;
        case '-':
            result = numero1 - numero2;
        break;
        case '*':
            result = numero1 * numero2;
        break;
        case '/':
            result = numero1 / numero2;
        break;
        default:
            alert('operacion no permitida...');
        break;
    }
    return result;
}