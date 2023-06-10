// Mascara formato CPF
const cpf = document.getElementById('cpf')
    for(let i = 0; i<cpf.length; i++) {
        cpf.addEventListener('input', function() {
            let input = this.value;
            let numericValue = input.replace(/\D/g, '');
            let maskedValue = numericValue.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
            this.value = maskedValue;
        });

    }

// Movimento labels nos input 
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

// Movimento entre telas
const loginSection = document.getElementById('login');
const cadastroSection = document.getElementById('cadastro')
const cadastroLink = document.querySelector('#cadastrar');
const login = document.getElementById("returnLogin")


    cadastroLink.addEventListener('click', (event) => {
    event.preventDefault();

    loginSection.style.display = 'none';
    cadastroSection.style.display = 'block';

    });
    login.addEventListener('click', (event) => {
        event.preventDefault()

        loginSection.style.display = 'flex'
        cadastroSection.style.display = 'none'

    })