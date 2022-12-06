//Local storage pessoa fisica
function leDadosPF() {
    let strDadosPF = localStorage.getItem('dbPF');
    let objDadosPF = {};

    if (strDadosPF) {
        objDadosPF = JSON.parse(strDadosPF);
    }
    else {
        objDadosPF = { registro: [
                {nome: "Lewis",
                sobrenome: "Hamilton",
                email: "lh44@gmail.com",
                birth: "07/01/1985",
                cpf: "12345678900",
                phone: "3131313131",
                wpp: "31955554444",
                password: "heptacampeao"
        }]
        }
    }

    return objDadosPF;
}

function salvaDadosPF(leDadosPF) {
    localStorage.setItem('dbPF', JSON.stringify(leDadosPF));
}

function incluiDadosPF() {
    let objDadosPF = leDadosPF();

    let strNomePF = document.getElementById("nome").value;
    let strLastnamePF = document.getElementById("lastname").value;
    let strEmailPF = document.getElementById("email").value;
    let strBirthPF = document.getElementById("birth").value;
    let strCpfPF = document.getElementById("cpf").value;
    let strPhonePF = document.getElementById("phone").value;
    let strWppPF = document.getElementById("wpp").value;
    let strPswdPF = document.getElementById("pswd").value;

    let novoRegistroPF = {
        nome: strNomePF,
        sobrenome: strLastnamePF,
        email: strEmailPF,
        birth: strBirthPF,
        cpf: strCpfPF,
        phone: strPhonePF,
        wpp: strWppPF,
        password: strPswdPF
    };

    objDadosPF.registro.push(novoRegistroPF);
    salvaDadosPF(objDadosPF);

}

document.getElementById('save_button').addEventListener('click', incluiDadosPF);

//Local Storage pessoa juridica

function leDadosPJ() {
    let strDadosPJ = localStorage.getItem('dbPJ');
    let objDadosPJ = {};

    if (strDadosPJ) {
        objDadosPJ = JSON.parse(strDadosPJ);
    }
    else {
        objDadosPJ = { registro: [
                {nome: "Toto",
                sobrenome: "Wolff",
                email: "totowolff@gmail.com",
                company: "Mercedes Society",
                cnpj: "14.151.617/1819-20",
                phone: "(31)2120-1918",
                wpp: "(31)91415-1617",
                password: "octacampea"
        }
        ]
        }
    }

    return objDadosPJ;
}

function salvaDadosPJ(dadosPJ) {
    localStorage.setItem('dbPJ', JSON.stringify(dadosPJ));
}

function incluiDadosPJ() {
    let objDadosPJ = leDadosPJ();

    let strNomePJ = document.getElementById("name1").value;
    let strLastnamePJ = document.getElementById("lastname1").value;
    let strEmailPJ = document.getElementById("email1").value;
    let strCompany = document.getElementById("company").value;
    let strCnpj = document.getElementById("cnpj").value;
    let strPhonePJ = document.getElementById("phone1").value;
    let strWppPJ = document.getElementById("wpp1").value;
    let strPswdPJ = document.getElementById("pswd1").value;

    let novoRegistroPJ = {
        nome: strNomePJ,
        sobrenome: strLastnamePJ,
        email: strEmailPJ,
        company: strCompany,
        cnpj: strCnpj,
        phone: strPhonePJ,
        wpp: strWppPJ,
        password: strPswdPJ
    };

    objDadosPJ.registro.push(novoRegistroPJ);
    salvaDadosPJ(objDadosPJ);


}

document.getElementById('save_button1').addEventListener('click', incluiDadosPJ);
