window.addEventListener('load', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        let emailField = document.querySelector('.email-field');
        let passwordField = document.querySelector('.password-field');
        let errors = document.getElementsByClassName('errors');
        let validForm = true;

        const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailField.value.trim() == '') {
            validForm = false;
            errors[0].innerHTML = 'Debes ingresar tu correo electrónico';
        } else if (!emailRegEx.test(emailField.value) && emailField.value > 0) {
            validForm = false;
            errors[0].innerHTML = 'El correo electrónico no es válido';
        }else {
            errors[0].innerHTML = '';
        }


        if (passwordField.value.trim() == '') {
            validForm = false;
            errors[1].innerHTML = 'Debes ingresar una contraseña';
        } else if (passwordField.value.length < 8){
            validForm = false;
            errors[1].innerHTML = 'El campo debe tener como mínimo 8 caracteres';
        } else {
            errors[1].innerHTML = '';
        }

        if (!validForm) {
            e.preventDefault(); // Evitar que el formulario se envíe si hay errores
        }


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