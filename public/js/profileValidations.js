window.addEventListener('load', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        let avatar = document.getElementById('avatar');
        let image = avatar.files;
        let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.avif|\.webip|\.bmp)$/i;
        let filePath = avatar.value;
        let errors = document.getElementsByClassName('errors');
        let validForm = true;

        if (image.length > 0 && !allowedExtensions.exec(filePath)) {
            validForm = false;
            errors[0].innerHTML = 'El formato del archivo no es válido';
        } else if (image.length == 0) {
            validForm = false;
            errors[0].innerHTML = '';
        };

        if (!validForm) {
            e.preventDefault(); // Evitar que el formulario se envíe si hay errores
        };

        for (let i = 0; i < errors.length; i++) {
            errors.style.color = "#f3f1f1";
            errors.style.fontSize = "smaller";
            errors.style.margin = "5px 0 10px 0";
            errors.style.textAlign = "justify";
            errors.style.textJustify = "inter-word";
        };
    });
});