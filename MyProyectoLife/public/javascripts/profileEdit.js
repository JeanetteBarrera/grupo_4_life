let qs = function(elemento){
    return document.querySelector(elemento)
}

/*window.addEventListener('load', () => {
    console.log('Vinculado')


    let $inputStreet = qs('#street'),
    $streetErrors = qs('#streetErrors'),
    $inputCity = qs('#city'),
    $cityErrors = qs('#cityErrors'),
    $inputState = qs('#state'),
    $stateErrors = qs('#stateErrors'),
    $inputCountry = qs('#country'),
    $countryErrors = qs('#countryErrors'),
    $inputZipCode = qs('#ZipCode'),
    $ZipCodeErrors = qs('#ZipCodeErrors'),
    $inputPhone = qs('#phone'),
    $phoneErrors = qs('#phoneErrors'),
    $inputDpto = qs('#dpto'),
    $dptoErrors = qs('#dptoErrors'),
    $inputPiso = qs('#piso'),
    $pisoErrors = qs('#pisoErrors'),
    $inputavatar = qs('#avatar'),
    $avatarErrors = qs('#avatarErrors')

    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;



    $inputStreet.addEventListener('blur', function(){
        console.log($inputStreet.value.trim())
        switch (true) {
            case !$inputStreet.value.trim():
                $streetErrors.innerHTML = 'El campo nombre es obligatorio'
                $inputStreet.classList.add('is-invalid')
                break;
            case !regExAlpha.test($inputStreet.value):
                $streetErrors.innerHTML = 'Debes ingresar un nombre válido'
                $inputStreet.classList.add('is-invalid')  
                break; 
            default:
                $inputStreet.classList.remove('is-invalid');
                $inputStreet.classList.add('is-valid');
                $streetErrors.innerHTML = ''
                break;
        }
    })

    $inputCity.addEventListener('blur', function(){
        console.log($inputCity.value.trim())
        switch (true) {
            case !$inputCity.value.trim():
                $cityErrors.innerHTML = 'El campo nombre es obligatorio'
                $inputcity.classList.add('is-invalid')
                break;
            case !regExAlpha.test($inputcity.value):
                $cityErrors.innerHTML = 'Debes ingresar un nombre válido'
                $inputCity.classList.add('is-invalid')  
                break; 
            default:
                $inputCity.classList.remove('is-invalid');
                $inputCity.classList.add('is-valid');
                $cityErrors.innerHTML = ''
                break;
        }


        $inputCity.addEventListener('blur', function(){
            console.log($inputCity.value.trim())
            switch (true) {
                case !$inputCity.value.trim():
                    $cityErrors.innerHTML = 'El campo nombre es obligatorio'
                    $inputcity.classList.add('is-invalid')
                    break;
                case !regExAlpha.test($inputcity.value):
                    $cityErrors.innerHTML = 'Debes ingresar un nombre válido'
                    $inputCity.classList.add('is-invalid')  
                    break; 
                default:
                    $inputCity.classList.remove('is-invalid');
                    $inputCity.classList.add('is-valid');
                    $cityErrors.innerHTML = ''
                    break;
            }
        })


    $file.addEventListener('change', 
    function fileValidation(){
        let filePath = $file.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $file.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            // Image preview
            console.log($file.files);
            if($file.files && $file.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($file.files[0]);
                $fileErrors.innerHTML = '';
                $file.classList.remove('is-invalid')
            }
        }
    }),
}),*/