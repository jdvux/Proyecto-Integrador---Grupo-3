window.addEventListener('load', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        let errorsArray = [];

        let emailField = document.querySelector('.email-field');
        const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailField.value == '') {
            errorsArray.push('Debes ingresar tu correo electrónico');
        };

        if (!emailRegEx.test(emailField.value) && emailField.value > 0) {
            errorsArray.push('El correo electrónico no es válido');
        };

        let passwordField = document.querySelector('.password-field');
        if (passwordField.value == '') {
            errorsArray.push('Debes ingresar tu contraseña');
        };

        if (errorsArray.length > 0) {
            e.preventDefault();
            
            let errorsContainer = document.querySelector('.errors');
            errorsContainer.style.paddingTop = "2%";

            let ulErrors = document.querySelector('div.errors ul');
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