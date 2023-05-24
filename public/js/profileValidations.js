window.addEventListener('load', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        let name = document.getElementById('userName');
        let lastName = document.getElementById('userLastName');
        let avatar = document.getElementById('avatar');
        let image = avatar.files;
        let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.avif|\.webip|\.bmp)$/i;
        let filePath = avatar.value;
        let errors = document.getElementsByClassName('errors');
        let validForm = true;

        // if (name.value === '') {
        //     validForm = false;
        //     errors[1].innerHTML = 'Debes ingresar tu nombre'
        // } else if (name.value.length < 2) {
        //     validForm = false;
        //     errors[1].innerHTML = 'El nombre debe tener al menos 2 caracteres';
        // };

        // if (lastName.value === '') {
        //     validForm = false;
        //     errors[2].innerHTML = 'Debes ingresar tu apellido'
        // } else if (lastName.value.length) {
        //     validForm = false;
        //     errors[2].innerHTML = 'El apellido debe tener al menos 2 caracteres'
        // };
 
        if (image.length > 0 && !allowedExtensions.exec(filePath)) {
            validForm = false;
            errors[0].innerHTML = 'El formato del archivo no es válido';
        };

        if (!validForm) {
            e.preventDefault(); // Evitar que el formulario se envíe si hay errores
        };

        for (let i = 0; i < errors.length; i++) {
            errors[i].style.color = "#f3f1f1";
            errors[i].style.listStyle = "none";
            errors[i].style.fontSize = "smaller";
            errors[i].style.margin = "0 10% 2%";
            errors[i].style.textAlign = "justify";
            errors[i].style.textJustify = "inter-word";
        };
    });
});