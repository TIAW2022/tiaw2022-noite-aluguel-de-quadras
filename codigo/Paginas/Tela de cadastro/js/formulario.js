        const form = document.getElementById('form-cadastro');
        const form1 = document.getElementById('form-cadastro1');
        const campos = document.querySelectorAll('.form-control');
        const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            nameValidation();
            lastnameValidation();
            numberValidation();
            emailValidation();
            passwordValidation();
            confirmValidation();
            cpfValidation();
            cnpjValidation1();
            companyValidation1();
            nameValidation1();
            lastnameValidation1();
            numberValidation1();
            emailValidation1();
            passwordValidation1();
            confirmValidation1();
        });

        function setError(index) {
            campos[index].style.border = '2px solid #e63636';
           
        }

        function removeError(index) {
            campos[index].style.border = '';
        }

       function onlyLetters(e) {
            var x = e.which || e.keycode;
            if (!(x >= 48 && x <= 57) && !(x >= 96 && x <= 105)) {
                return true;
            }
            else {
                return false;
            }
        }

        function wppMask(){
            var wpp = document.getElementById('wpp')
            if(wpp.value.length == 0){
                wpp.value += "("
            }
            else if (wpp.value.length == 3){
                wpp.value += ")"
            }
            else if (wpp.value.length == 9){
                wpp.value += "-"
            }
        }

        function wppMask1(){
            var wpp1 = document.getElementById('wpp1')
            if(wpp1.value.length == 0){
                wpp1.value += "("
            }
            else if (wpp1.value.length == 3){
                wpp1.value += ")"
            }
            else if (wpp1.value.length == 9){
                wpp1.value += "-"
            }
        }

        function phoneMask(){
            var phone = document.getElementById('phone')
            if(phone.value.length == 0){
                phone.value += "("
            }
            else if (phone.value.length == 3){
                phone.value += ")"
            }
            else if (phone.value.length == 8){
                phone.value += "-"
            }
        }

        function phoneMask1(){
            var phone1 = document.getElementById('phone1')
            if(phone1.value.length == 0){
                phone1.value += "("
            }
            else if (phone1.value.length == 3){
                phone1.value += ")"
            }
            else if (phone1.value.length == 8){
                phone1.value += "-"
            }
        }

        function cnpjMask(){
            var cnpj = document.getElementById('cnpj')
            if(cnpj.value.length == 2 || cnpj.value.length == 6){
                cnpj.value += "."
            }
            if(cnpj.value.length == 10){
                cnpj.value += "/"
            }
            else if(cnpj.value.length == 15){
                cnpj.value += "-"
            }
        }

        function cpfMask(){
        var cpf = document.getElementById('cpf')
        if(cpf.value.length == 3 || cpf.value.length == 7){
            cpf.value += "."
        }
        else if(cpf.value.length == 11){
            cpf.value += "-"
        }
    }
        function onlyNumbers(e) {
            var x = e.which || e.keycode;
            if ((x >= 48 && x <= 57) || (x >= 96 && x <= 105)) {
                return true;
            }
            switch (e.keyCode) {
            case 8:   
            case 46:  
            case 37:  
            case 38:
            case 39:
            case 40:
            return;
                }
            e.preventDefault();
        }

        function nameValidation() {
            if (campos[0].value.length < 3) {
                setError(0);
            }
            else {
                removeError(0);
            }
        }

        function lastnameValidation() {
            if (campos[1].value.length < 3) {
                setError(1);
            }
            else {
                removeError(1);
            }
        }

        function emailValidation() {
            if (!emailRegex.test(campos[2].value)) {
                setError(2);
            }
            else {
                removeError(2);
            }
        }

        function cpfValidation(){
            if(campos[4].value.length <3){
                setError(4);
            }
            else{
                removeError(4);
            }
        }

 
        function numberValidation() {
            if (campos[6].value.length < 5) {
                setError(6);
            }
            else {
                removeError(6);
            }
        }

        function passwordValidation() {
            if (campos[7].value.length < 8) {
                setError(7);
            }
            else {
                removeError(7);
                confirmValidation();
            }
        }

        function confirmValidation() {
            if (campos[7].value == campos[8].value && campos[8].value.length >= 8) {
                removeError(8);
            }
            else {
                setError(8);
            }
        }

        function nameValidation1() {
            if (campos[9].value.length < 3) {
                setError(9);
            }
            else {
                removeError(9);
            }
        }

        function lastnameValidation1() {
            if (campos[10].value.length < 3) {
                setError(10);
            }
            else {
                removeError(10);
            }
        }

        function emailValidation1() {
            if (!emailRegex.test(campos[11].value)) {
                setError(11);
            }
            else {
                removeError(11);
            }
        }

        function companyValidation1(){
            if (campos[12].value.length < 3){
                setError(12);
            }
            else{
                removeError(12);
            }
        }

        function cnpjValidation1(){
            if(campos[13].value.length <3){
                setError(13);
            }
            else{
                removeError(13);
            }
        }

 
        function numberValidation1() {
            if (campos[15].value.length < 5) {
                setError(15);
            }
            else {
                removeError(15);
            }
        }

        function passwordValidation1() {
            if (campos[16].value.length < 8) {
                setError(16);
            }
            else {
                removeError(16);
                confirmValidation();
            }
        }

        function confirmValidation1() {
            if (campos[16].value == campos[17].value && campos[17].value.length >= 8) {
                removeError(17);
            }
            else {
                setError(17);
            }
        }