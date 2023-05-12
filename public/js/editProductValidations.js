window.addEventListener('load', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        let nameField = document.querySelector('.name-field');
        let descriptionField = document.querySelector('.description-field');
        let brandField = document.getElementById('brand-selector');
        let categoryField = document.getElementById('category-selector');
        let sizeField = document.querySelector('.size-field');
        let firstPrice = document.querySelector('.price-field') 
        let priceField = document.querySelector('.final-price');
        let errors = document.getElementsByClassName('errors');
        let validForm = true;

        if (nameField.value.trim() === '') {
            validForm = false;
            errors[0].innerHTML = 'Debes ingresar un nombre para el producto';
        } else if (nameField.value.length < 5) {
            validForm = false;
            errors[0].innerHTML = 'El nombre debe tener como mínimo 5 caracteres';
        } else {
            errors[0].innerHTML = '';
        };

        if (descriptionField.value.length < 20) {
            validForm = false;
            errors[1].innerHTML ='La descripción debe tener como mínimo 20 caracteres';
        } else {
            errors[1].innerHTML = '';
        };
        
        if (sizeField.value == "") {
            validForm = false;
            errors[3].innerHTML = 'Debes indicar un talle para el producto';
        } else {
            errors[3].innerHTML = '';
        };

        if (firstPrice.value == "") {
            validForm = false;
            errors[4].innerHTML = 'Debes indicar el precio original del producto'
        } else if (firstPrice.value.length < 4) {
            validForm = false;
            errors[5].innerHTML = 'El precio del producto no puede ser menor a 1000';
        } else {
            errors[4].innerHTML = '';
        };

        if (brandField.value == "Selecciona una opción" || brandField.value == "" || !brandField.value) {
            validForm = false;
            errors[6].innerHTML = 'Debes elegir una marca para el producto';
        } else {
            errors[6].innerHTML = '';
        };

        if (categoryField.value == "Selecciona una opción" || categoryField.value == "" || !categoryField.value) {
            validForm = false;
            errors[7].innerHTML = 'Debes elegir una categoría para el producto';
        } else {
            errors[7].innerHTML = '';
        };

        if (priceField.value == "") {
            validForm = false;
            errors[5].innerHTML = 'Debes ingresar el precio final para el producto';
        } else if (priceField.value.length < 4) {
            validForm = false;
            errors[5].innerHTML = 'El precio del producto no puede ser menor a 1000';
        } else {
            errors[5].innerHTML = '';
        };

        if (!validForm) {
            e.preventDefault(); // Evitar que el formulario se envíe si hay errores
        };

        for (let i = 0; i < errors.length; i++) {
            errors[i].style.color = "#f3f1f1";
            errors[i].style.listStyle = "none";
            errors[i].style.fontSize = "smaller";
            errors[i].style.margin = "0 10% 2% 10%";
            errors[i].style.textAlign = "justify";
            errors[i].style.textJustify = "inter-word";
            errors[i].style.marginTop = "-15px";
        };
    });
});

// window.addEventListener('load', () => {
//     const form = document.querySelector('form');
//     form.addEventListener('submit', e => {
//         let errorsArray = [];

//         let nameField = document.querySelector('.name-field');
//         if (nameField.value == ''){
//             errorsArray.push('El campo de nombre tiene que estar completo');
//         } else if (nameField.value.length < 5) {
//             errorsArray.push('El campo nombre debe tener como mínimo 5 caracteres')
//         };

//         let descriptionField = document.querySelector('.description-field');
//         if (descriptionField.value.length < 20) {
//             errorsArray.push('El campo descripción debe tener como mínimo 20 caracteres')
//         };

//         let brandField = document.getElementById('brand-selector');
//         if (brandField.value == "Selecciona una opción" || brandField.value == "" || !brandField.value) {
//             errorsArray.push('Debes elegir una marca para el producto');
//         };

//         let categoryField = document.getElementById('category-selector');
//         if (categoryField.value == "Selecciona una opción" || categoryField.value == "" || !categoryField.value) {
//             errorsArray.push('Debes elegir una categoría para el producto');
//         };

//         let sizeField = document.querySelector('.size-field');
//         if (sizeField.value == "") {
//             errorsArray.push('Debes indicar un talle para el producto');
//         };

//         let priceField = document.querySelector('.price-field');
//         if (priceField.value == "") {
//             errorsArray.push('Debes ingresar un precio para el producto')
//         } else if (priceField.value.length < 4) {
//             errorsArray.push('El precio del producto no puede ser menor a 1000');
//         };

//         if (errorsArray.length > 0) {
//             e.preventDefault();

//             let errorsContainer = document.querySelector('.errors');
//             errorsContainer.style.paddingTop = "2%";

//             let ulErrors = document.querySelector('div.errors ul')
//             for (let i = 0; i < errorsArray.length; i++) {
//                 ulErrors.innerHTML += "<li>" + errorsArray[i] + "</li> <br>"
//             };

//             ulErrors.style.color = "#f3f1f1";
//             ulErrors.style.listStyle = "none";
//             ulErrors.style.fontSize = "smaller";
//             ulErrors.style.margin = "0 10% 2% 10%";
//             ulErrors.style.textAlign = "justify";
//             ulErrors.style.textJustify = "inter-word";
//         }; 
//     });
// });