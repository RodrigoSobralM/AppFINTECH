// // Mascara formato CPF
const cpfCnpj = document.querySelectorAll('#cpfCnpj');

for (let i = 0; i < cpfCnpj.length; i++) {
  cpfCnpj[i].addEventListener('input', function(event) {
    event.preventDefault()
    let input = this.value;
    let numericValue = input.replace(/\D/g, '');
    let maskedValue;

    if (numericValue.length <= 11) {
      // CPF
      maskedValue = numericValue.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    } else {
      // CNPJ
      maskedValue = numericValue.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    }

    this.value = maskedValue;
  });
}

// // Movimento labels nos input 
const inputFields = document.querySelectorAll('.input-field');
const inputContainers = document.querySelectorAll('.forms-groups');

  for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener('focus', () => {
      inputContainers[i].classList.add('active');
    });

    inputFields[i].addEventListener('blur', () => {
      if (!inputFields[i].value) {
        inputContainers[i].classList.remove('active');
      }
    });
    }

// // Movimento entre telas
const cadastrarLink = document.getElementById('cadastrar');
const returnLoginLink = document.getElementById('returnLogin');
const loginSection = document.getElementById('login');
const cadastroSection = document.getElementById('cadastro');
const homeSection = document.getElementById('home')
const btnEntrar = document.getElementById("btnEntrar")
const btnSair = document.getElementById('btnSair')
const verificando = document.querySelectorAll('.verificar')
const senha = document.getElementById('senha')
let campRequired = document.querySelectorAll('.campRequired')

console.log(campRequired)

btnEntrar.addEventListener('click', (event) => {
    event.preventDefault();
    for (let i = 0; i < verificando.length; i++) {
        if (verificando[i].value === "") {
            campRequired[i].innerHTML = 'Preencha o campo acima'
            campRequired[i].style.color = 'red'
            campRequired[i].style.fontFamily = 'Montserrat'
            campRequired[i].style.fontSize = '10px'
        }
        else {
          campRequired[i].innerHTML = ''
        }
    }
    const todosPreenchidos = Array.from(verificando).every(input => input.value.trim() !== "");
    
    if (todosPreenchidos) {
        homeSection.style.display = 'flex';
        loginSection.style.display = 'none';
    }
});
    
btnSair.addEventListener('click', (event) => {
    senha.value = "";
    event.preventDefault()
    homeSection.style.display = 'none'
    loginSection.style.display = 'flex'
})

cadastrarLink.addEventListener('click', (event) => {
    event.preventDefault();
    cadastroSection.classList.remove('slide-out');
    loginSection.classList.remove('slide-in');
    loginSection.classList.add('slide-out');
    setTimeout(() => {
        loginSection.style.display = 'none';
        cadastroSection.style.display = 'flex';
        cadastroSection.classList.add('slide-in');
    }, 500);
});

returnLoginLink.addEventListener('click', (event) => {
    event.preventDefault();
    cadastroSection.classList.remove('slide-in');
    loginSection.classList.remove('slide-out');
    cadastroSection.classList.add('slide-out')
    setTimeout(() => {
        loginSection.style.display = 'flex';
        cadastroSection.style.display = 'none';
        loginSection.classList.add('slide-in')
    }, 500);
});
