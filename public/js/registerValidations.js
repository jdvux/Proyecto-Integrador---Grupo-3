window.addEventListener('load', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', e => {

        let errorsArray = [];

        let nameField = document.querySelector('.name-field');
        if(nameField.value == ''){
            errorsArray.push('El campo de nombre tiene que estar completo');
        }else if(nameField.value.length < 2){
            errorsArray.push('El campo nombre debe tener como mínimo 2 caracteres')
        }


        let lastNameField = document.querySelector('.last-name-field');
        if(lastNameField.value == ''){
            errorsArray.push('El campo de apellido tiene que estar completo');
        }else if(lastNameField.value.length < 2){
            errorsArray.push('El campo apellido debe tener como mínimo 2 caracteres')
        }


        let emailField = document.querySelector('.email-field')
        const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailField.value == ''){
            errorsArray.push('El campo de email tiene que estar completo');
        }
        if (!emailRegEx.test(emailField.value) && emailField.value > 0) {
            errorsArray.push('El correo electrónico no es válido');
        }


        let passwordField = document.querySelector('.password-field');
        if(passwordField.value == ''){
            errorsArray.push('El campo de contraseña tiene que estar completo');
        }else if(passwordField.value.length < 8){
            errorsArray.push('El campo contraseña debe tener como mínimo 8 caracteres')
        }

        let terms = document.getElementById('terms');
        if(!terms.checked){
            errorsArray.push('Debes aceptar los términos y condiciones');
        }

        if(errorsArray.length > 0){
            e.preventDefault();

            let ulErrors = document.querySelector('div.errors ul')
            for(let i=0; i < errorsArray.length; i++){
                ulErrors.innerHTML += "<li>" + errorsArray[i] + "</li> <br>"
            }
            ulErrors.style.color = "#f3f1f1";
            ulErrors.style.fontSize = "smaller";
            ulErrors.style.width = "80%";
            ulErrors.style.margin = "-4% auto 3%"; 
        }

        
    })
});