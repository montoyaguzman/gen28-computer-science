const formElement = document.querySelector('#language-form');
const ulElement = document.querySelector('#list-languages');
let languagesArray = [];

formElement.addEventListener('submit', function (event) {
    // 1. prevenir que se recargue la pagina al enviar el formulario
    event.preventDefault();

    // 2. Obtener los valores del formulario
    const inputElement = event.target.languageElement;
    const radioNodeList = event.target.statusRadioElement;
    let selectedRadioElement = null;

    const nodeListArray = Array.from(radioNodeList);
    selectedRadioElement = nodeListArray.find(element => element.checked);

    // 5. Crear un objeto elementList y agregarlo al array para despues pintarlo en pantalla
    const language = inputElement.value;
    const status = selectedRadioElement.value;
    const elementList = {
        description: language,
        status: status,
    }
    languagesArray.push(elementList);

    console.log(languagesArray);

    // 6. Limpiar la vista
    cleanView();

    // 7. Pintarlos en la pantalla
    renderViewLanguages(languagesArray);

    // 8. Actualizar la barra de totales
    renderTotal();

});

function renderViewLanguages(arrLanguages) {
    
    arrLanguages.forEach((element, index) => {

        // crear los elementos html
        const liElement = document.createElement('li');
        const divElement = document.createElement('div');
        const iconElement = document.createElement('i');
        const buttonElement = document.createElement('button');

        // agregar texto
        liElement.innerHTML = element.description;

        // agregarle estilos
        liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');
        
        // validar el status para saber que icono pintarle
        const currentStatus = element.status;
        
        if (currentStatus === 'standBy') {
            iconElement.classList.add('bi', 'bi-pause-circle-fill', 'text-warning');
        } else if (currentStatus === 'start') {
            iconElement.classList.add('bi', 'bi-check-circle-fill', 'text-primary');
        } else if (currentStatus === 'finished') {
            iconElement.classList.add('bi', 'bi-play-circle-fill', 'text-success');
        }

        buttonElement.classList.add('bi', 'bi-trash3-fill', 'text-danger');
        buttonElement.setAttribute('index', index);
        buttonElement.addEventListener('click', function(event) {
            const positionStr = event.target.getAttribute('index');
            const position = parseInt(positionStr);
            languagesArray.splice(position, 1);
            cleanView();
            renderViewLanguages(languagesArray);
            renderTotal();
        });

        // hacer aparecer las etiquetas en el DOM
        ulElement.appendChild(liElement);
        liElement.appendChild(divElement);
        divElement.appendChild(iconElement);
        divElement.appendChild(buttonElement);

    });
};

function cleanView() {
    ulElement.innerHTML = '';
}

function renderTotal(){
    const totalElement = document.querySelector('#language-all');
    const completeElement = document.querySelector('#language-complete');
    const pendingElement = document.querySelector('#language-pending');
    totalElement.innerHTML = languagesArray.length;
    completeElement.innerHTML = getCompleted(languagesArray);
    pendingElement.innerHTML =  getPendings(languagesArray);
}

function getCompleted(arrLanguages) {
    const completedList = arrLanguages.filter(element => element.status === 'finished');
    const countFinished = completedList.length;
    return countFinished;
}

function getPendings(arrLanguages) {
    let countPendings = 0;
    arrLanguages.forEach(element => {
        if (element.status === 'standBy' || element.status === 'start') {
            countPendings++;
        }
    });
    return countPendings;
}