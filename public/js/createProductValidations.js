window.addEventListener('load', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        let nameField = document.querySelector('.name-field');
        let descriptionField = document.querySelector('.description-field');
        let fileInput = document.getElementById('files');
        let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.avif|\.webip|\.bmp)$/i;
        let filePath = fileInput.value;
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

        if (fileInput.files.length !== 8) {
            validForm = false;
            errors[2].innerHTML = 'El producto debe tener 8 imágenes';
        } else if (!allowedExtensions.exec(filePath)) {
            validForm = false;
            errors[2].innerHTML = 'El formato del archivo no es válido';
        } else {
            errors[2].innerHTML = '';
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