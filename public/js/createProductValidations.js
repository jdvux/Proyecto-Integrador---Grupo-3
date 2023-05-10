window.addEventListener('load', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        let errorsArray = [];

        let nameField = document.querySelector('.name-field');
        if (nameField.value == ''){
            errorsArray.push('El campo de nombre tiene que estar completo');
        } else if (nameField.value.length < 5) {
            errorsArray.push('El campo nombre debe tener como mínimo 5 caracteres')
        };

        let descriptionField = document.querySelector('.description-field');
        if (descriptionField.value.length < 20) {
            errorsArray.push('El campo descripción debe tener como mínimo 20 caracteres')
        };

        let imageField = document.getElementById('files');
        if (imageField.value == "" || !imageField.value.length) {
            errorsArray.push('Debes subir al menos una imagen');
        };

        let brandField = document.getElementById('brand-selector');
        if (brandField.value == "Selecciona una opción" || brandField.value == "" || !brandField.value) {
            errorsArray.push('Debes elegir una marca para el producto');
        };

        let categoryField = document.getElementById('category-selector');
        if (categoryField.value == "Selecciona una opción" || categoryField.value == "" || !categoryField.value) {
            errorsArray.push('Debes elegir una categoría para el producto');
        };

        let sizeField = document.querySelector('.size-field');
        if (sizeField.value == "") {
            errorsArray.push('Debes indicar un talle para el producto');
        };

        let priceField = document.querySelector('.price-field');
        if (priceField.value == "") {
            errorsArray.push('Debes ingresar un precio para el producto')
        } else if (priceField.value.length < 4) {
            errorsArray.push('El precio del producto no puede ser menor a 1000');
        };

        if (errorsArray.length > 0) {
            e.preventDefault();

            let errorsContainer = document.querySelector('.errors');
            errorsContainer.style.paddingTop = "2%";

            let ulErrors = document.querySelector('div.errors ul')
            for (let i = 0; i < errorsArray.length; i++) {
                ulErrors.innerHTML += "<li>" + errorsArray[i] + "</li> <br>"
            };

            ulErrors.style.color = "#f3f1f1";
            ulErrors.style.listStyle = "none";
            ulErrors.style.fontSize = "smaller";
            ulErrors.style.margin = "0 10% 2% 10%";
            ulErrors.style.textAlign = "justify";
            ulErrors.style.textJustify = "inter-word";
        }; 
    });
});