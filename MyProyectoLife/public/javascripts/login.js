let qs = function(elemento){
    return document.querySelector(elemento)
}

window.addEventListener('load', () => {
    console.log('Vinculado')

    let $inputName = qs('#name'),
    $form = qs('#form'),
    $submitErrors=qs("#submitErrors"),
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $password = qs('#password'),
    $passwordErrors = qs('#passwordErrors'),
   
    $terms = qs('#flexCheckDefault'),
    $termsErrors = qs('#termsErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;


    //VALIDACION LOGIN//

    $email.addEventListener('blur', function() {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'The email field is required';
                $email.classList.add('is-invalid')
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'Invalid email';
                $email.classList.add('is-invalid')
                break
            default:
                $email.classList.remove('is-invalid');
                $email.classList.add('is-valid');
                $emailErrors.innerHTML = ''
                break;
         }
        })
    
    
      $password.addEventListener('blur', function() {
        switch (true) {
            case !$password.value.trim():
                $passwordErrors.innerHTML = 'The password field is required';
                $password.classList.add('is-invalid')
                break;
            case    !regExPass.test($password.value):
                    $password2Errors.innerHTML = 'Invalid password';
                    $password2.classList.add('is-invalid')
                    break;
            
            default:
                $passwordword.classList.remove('is-invalid');
                $passwordword.classList.add('is-valid');
                $passwordErrors.innerHTML = ''
                break;
            }
        })
       
        $form.addEventListener('submit',function(event){
            let error = false;
            event.preventDefault()
            console.log($form.elements)
            let elementosForm = this.elements
            
            for (let index = 0; index < elementosForm.length-1; index++) {
                if(elementosForm[index].value == ""){
                    elementosForm[index].classList.add('is-invalid');
                    $submitErrors.innerHTML = "the indicated fields are required";
                    error = true;
                }
            }
            if(!error){
                console.log('Todo bien');
                $form.submit()
            }
            
        })
    })