//Local storage pessoa fisica
function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = { registro: [
                {nome: "Lewis",
                sobrenome: "Hamilton",
                email: "lh44@gmail.com",
                birth: "07/01/1985",
                cpf: "12345678900",
                phone: "3131313131",
                wpp: "31955554444",
                password: "heptacampeao"
        }
        ]
        }
    }

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

function incluiDados() {
    let objDados = leDados();

    let strNome = document.getElementById("nome").value;
    let strLastname = document.getElementById("lastname").value;
    let strEmail = document.getElementById("email").value;
    let strBirth = document.getElementById("birth").value;
    let strCpf = document.getElementById("cpf").value;
    let strPhone = document.getElementById("phone").value;
    let strWpp = document.getElementById("wpp").value;
    let strPswd = document.getElementById("pswd").value;

    let novoRegistro = {
        nome: strNome,
        sobrenome: strLastname,
        email: strEmail,
        birth: strBirth,
        cpf: strCpf,
        phone: strPhone,
        wpp: strWpp,
        password: strPswd
    };

    objDados.registro.push(novoRegistro);
    salvaDados(objDados);

    imprimeDados();

}

document.getElementById('save_button').addEventListener('click', incluiDados);

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

    imprimeDadosPJ();

}

document.getElementById('save_button1').addEventListener('click', incluiDadosPJ);
